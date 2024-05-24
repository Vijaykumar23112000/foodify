package com.foodify.service.impl;

import com.foodify.Utils.order.OrderItemUtil;
import com.foodify.Utils.order.OrderUtil;
import com.foodify.dto.order.OrderRequestDto;
import com.foodify.entity.*;
import com.foodify.repository.Address.AddressRepository;
import com.foodify.repository.order.OrderItemRepository;
import com.foodify.repository.order.OrderRepository;
import com.foodify.repository.user.UserRepository;
import com.foodify.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final OrderItemRepository orderItemRepository;
    private final AddressRepository addressRepository;
    private final UserRepository userRepository;
    private final RestaurantServiceImpl restaurantService;
    private final CartServiceImpl cartService;

    @Override
    public Order createOrder(OrderRequestDto order, User user) throws Exception {
        Address shippingAddress = order.getDeliveryAddress();
        Address savedAddress = addressRepository.save(shippingAddress);
        if(!user.getAddresses().contains(savedAddress)) {
            user.getAddresses().add(savedAddress);
            userRepository.save(user);
        }
        Restaurant restaurant = restaurantService.findRestaurantById(order.getRestaurantId());
        Order createdOrder = OrderUtil.createOrder(user , savedAddress , restaurant);
        Cart cart = cartService.findCartByUserId(user.getId());
        List<OrderItem> orderItems = new ArrayList<>();
        for(CartItem cartItem : cart.getItem()){
            OrderItem orderItem = OrderItemUtil.createOrderItem(cartItem);
            OrderItem savedOrderItem = orderItemRepository.save(orderItem);
            orderItems.add(savedOrderItem);
        }
        createdOrder.setItems(orderItems);
        createdOrder.setTotalPrice(cartService.calculateCartTotals(cart));
        Order savedOrder = orderRepository.save(createdOrder);
        restaurant.getOrders().add(savedOrder);
        return createdOrder;
    }

    @Override
    public Order updateOrder(Long orderId, String orderStatus) throws Exception {
        Order order = findOrderById(orderId);
        if(orderStatus.equals("OUT_FOR_DELIVERY")
                || orderStatus.equals("DELIVERED")
                || orderStatus.equals("COMPLETED")
                || orderStatus.equals("PENDING"))
        {
            order.setOrderStatus(orderStatus);
            return orderRepository.save(order);
        }
        throw new Exception("Please Select A Valid Order Status");
    }

    @Override
    public void cancelOrder(Long orderId) throws Exception {
//        Order order = findOrderById(orderId);
        orderRepository.deleteById(orderId);
    }

    @Override
    public List<Order> getUsersOrder(Long userId) throws Exception {
        return orderRepository.findByCustomerId(userId);
    }

    @Override
    public List<Order> getRestaurantsOrder(Long restaurantId, String orderStatus) throws Exception {
        List<Order> orders = orderRepository.findByRestaurantId(restaurantId);
        if(orderStatus!=null) orders = orders.stream()
                                            .filter(order -> order.getOrderStatus().equals(orderStatus))
                                            .collect(Collectors.toList());
        return orders;
    }

    @Override
    public Order findOrderById(Long orderId) throws Exception {
        Optional<Order> optionalOrder = orderRepository.findById(orderId);
        if(optionalOrder.isEmpty()) throw new Exception("Order Not Found");
        return optionalOrder.get();
    }

}

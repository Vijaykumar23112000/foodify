package com.foodify.service.impl;

import com.foodify.dto.order.OrderRequestDto;
import com.foodify.dto.payment.PaymentLinkResponse;
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
import java.util.stream.Collectors;

import static com.foodify.Utils.order.OrderItemUtil.createOrderItem;
import static com.foodify.Utils.order.OrderUtil.createOrder;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final OrderItemRepository orderItemRepository;
    private final AddressRepository addressRepository;
    private final UserRepository userRepository;
    private final RestaurantServiceImpl restaurantService;
    private final CartServiceImpl cartService;

    private final PaymentServiceImpl paymentService;


    @Override
    public PaymentLinkResponse createOrder(OrderRequestDto order, User user) throws Exception {
        var shippingAddress = order.getDeliveryAddress();
        var savedAddress = addressRepository.save(shippingAddress);
        if (!user.getAddresses().contains(savedAddress)) {
            user.getAddresses().add(savedAddress);
            userRepository.save(user);
        }
        var restaurant = restaurantService.findRestaurantById(order.getRestaurantId());
        var cart = cartService.findCartByUserId(user.getId());
        var orderItems = new ArrayList<OrderItem>();
        for (CartItem cartItem : cart.getItem()) {
            var orderItem = createOrderItem.apply(cartItem);
            var savedOrderItem = orderItemRepository.save(orderItem);
            orderItems.add(savedOrderItem);
        }
        var createdOrder = createOrder.apply(user, savedAddress, restaurant);
        createdOrder.setItems(orderItems);
        createdOrder.setTotalPrice(cartService.calculateCartTotals(cart));
        var savedOrder = orderRepository.save(createdOrder);
        restaurant.getOrders().add(savedOrder);
        return paymentService.createPayment(savedOrder);
    }


    @Override
    public Order updateOrder(Long orderId, String orderStatus) throws Exception {
        var order = findOrderById(orderId);
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
        findOrderById(orderId);
        orderRepository.deleteById(orderId);
    }

    @Override
    public List<Order> getUsersOrder(Long userId) {
        return orderRepository.findByCustomerId(userId);
    }

    @Override
    public List<Order> getRestaurantsOrder(Long restaurantId, String orderStatus) {
        var orders = orderRepository.findByRestaurantId(restaurantId);
        if(orderStatus!=null) orders = orders.stream()
                                            .filter(order -> order.getOrderStatus().equals(orderStatus))
                                            .collect(Collectors.toList());
        return orders;
    }

    @Override
    public Order findOrderById(Long orderId) throws Exception {
        var optionalOrder = orderRepository.findById(orderId);
        if(optionalOrder.isEmpty()) throw new Exception("Order Not Found");
        return optionalOrder.get();
    }

}

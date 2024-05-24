package com.foodify.service;

import com.foodify.dto.order.OrderRequestDto;
import com.foodify.entity.Order;
import com.foodify.entity.User;

import java.util.List;

public interface OrderService {
    Order createOrder(OrderRequestDto order , User user) throws Exception;
    Order updateOrder(Long orderId , String orderStatus) throws Exception;
    void cancelOrder(Long orderId) throws Exception;
    List<Order> getUsersOrder(Long userId) throws Exception;
    List<Order> getRestaurantsOrder(Long restaurantId , String orderStatus) throws Exception;
    Order findOrderById(Long orderId) throws Exception;
}

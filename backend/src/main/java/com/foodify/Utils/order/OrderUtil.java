package com.foodify.Utils.order;

import com.foodify.entity.Address;
import com.foodify.entity.Order;
import com.foodify.entity.Restaurant;
import com.foodify.entity.User;

import java.util.Date;

public class OrderUtil {

    public static Order createOrder(User user , Address savedAddress , Restaurant restaurant){

        return Order
                .builder()
                .customer(user)
                .createdAt(new Date())
                .orderStatus("PENDING")
                .deliveryAddress(savedAddress)
                .restaurant(restaurant)
                .build();

    }

}

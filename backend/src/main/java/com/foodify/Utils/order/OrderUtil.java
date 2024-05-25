package com.foodify.Utils.order;

import com.foodify.entity.Address;
import com.foodify.entity.Order;
import com.foodify.entity.Restaurant;
import com.foodify.entity.User;
import com.foodify.myimpl.QuadFunction;

import java.util.Date;

public class OrderUtil {

    public static QuadFunction<User , Address , Restaurant , Order> createOrder = (user , savedAddress , restaurant) ->
            Order
                    .builder()
                    .customer(user)
                    .createdAt(new Date())
                    .orderStatus("PENDING")
                    .deliveryAddress(savedAddress)
                    .restaurant(restaurant)
                    .build();

}

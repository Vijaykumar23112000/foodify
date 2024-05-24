package com.foodify.Utils.order;

import com.foodify.entity.CartItem;
import com.foodify.entity.Food;
import com.foodify.entity.OrderItem;

import java.util.List;

public class OrderItemUtil {

    public static OrderItem createOrderItem(CartItem cartItem){
        return OrderItem
                .builder()
                .food(cartItem.getItem())
                .ingredients(cartItem.getIngredients())
                .quantity(cartItem.getQuantity())
                .totalPrice(cartItem.getTotalPrice())
                .build();
    }

}

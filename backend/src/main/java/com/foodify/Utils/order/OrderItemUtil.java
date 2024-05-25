package com.foodify.Utils.order;

import com.foodify.entity.CartItem;
import com.foodify.entity.OrderItem;

import java.util.function.Function;

public class OrderItemUtil {

    public static Function<CartItem , OrderItem> createOrderItem = cartItem ->
            OrderItem
                    .builder()
                    .food(cartItem.getFood())
                    .ingredients(cartItem.getIngredients())
                    .quantity(cartItem.getQuantity())
                    .totalPrice(cartItem.getTotalPrice())
                    .build();

}

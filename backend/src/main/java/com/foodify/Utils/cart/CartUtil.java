package com.foodify.Utils.cart;

import com.foodify.entity.Cart;
import com.foodify.entity.User;

import java.util.function.Function;

public class CartUtil {

    public static Function<User , Cart> createCart = savedUser ->
            Cart
                    .builder()
                    .customer(savedUser)
                    .build();

}

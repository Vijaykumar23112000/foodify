package com.foodify.Utils.cart;

import com.foodify.dto.cart.CartItemRequestDto;
import com.foodify.entity.Cart;
import com.foodify.entity.CartItem;
import com.foodify.entity.Food;
import com.foodify.myimpl.QuadFunction;

public class CartItemUtil {

    public static QuadFunction<Food , Cart , CartItemRequestDto , CartItem> createCartItem = (food , cart , request) ->
            CartItem
                    .builder()
                    .food(food)
                    .cart(cart)
                    .quantity(request.getQuantity())
                    .ingredients(request.getIngredients())
                    .totalPrice(request.getQuantity()*food.getPrice())
                    .build();

}

package com.foodify.Utils.cart;

import com.foodify.dto.cart.CartItemRequestDto;
import com.foodify.entity.Cart;
import com.foodify.entity.CartItem;
import com.foodify.entity.Food;

public class CartItemUtil {

    public static CartItem createCartItem(Food food , Cart cart , CartItemRequestDto request){
        return CartItem
                .builder()
                .item(food)
                .cart(cart)
                .quantity(request.getQuantity())
                .ingredients(request.getIngredients())
                .totalPrice(request.getQuantity()*food.getPrice())
                .build();
    }

}

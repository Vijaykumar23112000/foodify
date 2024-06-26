package com.foodify.service;

import com.foodify.dto.cart.CartItemRequestDto;
import com.foodify.entity.Cart;
import com.foodify.entity.CartItem;

public interface CartService {
    CartItem addItemToCart(CartItemRequestDto request , String token) throws Exception;
    CartItem updateCartItemQuantity(Long cartItemId , int quantity) throws Exception;
    Cart removieItemFromCart(Long cartItemId , String token) throws Exception;
    Long calculateCartTotals(Cart cart);
    Cart findCartById(Long id) throws Exception;
    Cart findCartByUserId(Long userId);
    Cart clearCart(Long userId);
}

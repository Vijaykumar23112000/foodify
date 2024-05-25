package com.foodify.service.impl;

import com.foodify.dto.cart.CartItemRequestDto;
import com.foodify.dto.mapper.UserAndUserResponseDtoMapper;
import com.foodify.entity.Cart;
import com.foodify.entity.CartItem;
import com.foodify.repository.Cart.CartItemRepository;
import com.foodify.repository.Cart.CartRepository;
import com.foodify.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


import static com.foodify.Utils.cart.CartItemUtil.createCartItem;


@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {

    private final CartRepository cartRepository;
    private final UserServiceImpl userService;
    private final CartItemRepository cartItemRepository;
    private final FoodServiceImpl foodService;
    private final UserAndUserResponseDtoMapper userMapper;

    @Override
    public CartItem addItemToCart(CartItemRequestDto request, String token) throws Exception {
        var user = userMapper.toENTITY.apply(userService.findUserByJwtToken(token.substring(7).trim()));
        var food = foodService.findFoodById(request.getFoodId());
        var cart = cartRepository.findByCustomerId(user.getId());
        for(CartItem cartItem : cart.getItem()){
            if(cartItem.getFood().equals(food)){
                int newQuantity = cartItem.getQuantity() + request.getQuantity();
                return updateCartItemQuantity(cartItem.getId() , newQuantity);
            }
        }
        var newCartItem  = createCartItem.apply(food , cart , request);
        var savedCartItem = cartItemRepository.save(newCartItem);
        cart.getItem().add(savedCartItem);
        return savedCartItem;
    }

    @Override
    public CartItem updateCartItemQuantity(Long cartItemId, int quantity) throws Exception {
        var optionalCartItem = cartItemRepository.findById(cartItemId);
        if(optionalCartItem.isEmpty()) throw new Exception("CartItem Not Found");
        var cartItem = optionalCartItem.get();
        cartItem.setQuantity(quantity);
        cartItem.setTotalPrice(cartItem.getFood().getPrice()*quantity);
        return cartItemRepository.save(cartItem);
    }

    @Override
    public Cart removieItemFromCart(Long cartItemId, String token) throws Exception {
        var user = userMapper.toENTITY.apply(userService.findUserByJwtToken(token.substring(7).trim()));
        var cart = cartRepository.findByCustomerId(user.getId());
        var optionalCartItem = cartItemRepository.findById(cartItemId);
        if(optionalCartItem.isEmpty()) throw new Exception("CartItem Not Found");
        var cartItem = optionalCartItem.get();
        cart.getItem().remove(cartItem);
        return cartRepository.save(cart);
    }

    @Override
    public Long calculateCartTotals(Cart cart) {
        long total = 0L;
        for(CartItem cartItem : cart.getItem()){
            total+=cartItem.getFood().getPrice()*cartItem.getQuantity();
        }
        return total;
    }

    @Override
    public Cart findCartById(Long id) throws Exception {
        var optionalCart = cartRepository.findById(id);
        if(optionalCart.isEmpty()) throw new Exception("Cart Not Found with id : "+id);
        return optionalCart.get();
    }

    @Override
    public Cart findCartByUserId(Long userId) {
        var cart = cartRepository.findByCustomerId(userId);
        cart.setTotal(calculateCartTotals(cart));
        return cart;
    }

    @Override
    public Cart clearCart(Long userId) {
        var cart = findCartByUserId(userId);
        cart.getItem().clear();
        return cartRepository.save(cart);
    }
}

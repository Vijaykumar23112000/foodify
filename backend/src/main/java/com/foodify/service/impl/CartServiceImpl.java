package com.foodify.service.impl;

import com.foodify.Utils.cart.CartItemUtil;
import com.foodify.dto.cart.CartItemRequestDto;
import com.foodify.dto.mapper.UserAndUserResponseDtoMapper;
import com.foodify.entity.Cart;
import com.foodify.entity.CartItem;
import com.foodify.entity.Food;
import com.foodify.entity.User;
import com.foodify.repository.CartItemRepository;
import com.foodify.repository.CartRepository;
import com.foodify.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;


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
        User user = userMapper.toENTITY(userService.findUserByJwtToken(token.substring(7).trim()));
        Food food = foodService.findFoodById(request.getFoodId());
        Cart cart = cartRepository.findByCustomerId(user.getId());
        for(CartItem cartItem : cart.getItem()){
            if(cartItem.getItem().equals(food)){
                int newQuantity = cartItem.getQuantity()+ request.getQuantity();
                return updateCartItemQuantity(cartItem.getId() , newQuantity);
            }
        }
        CartItem newCartItem  = CartItemUtil.createCartItem(food , cart , request);
        CartItem savedCartItem = cartItemRepository.save(newCartItem);
        cart.getItem().add(savedCartItem);
        return savedCartItem;
    }

    @Override
    public CartItem updateCartItemQuantity(Long cartItemId, int quantity) throws Exception {
        Optional<CartItem> optionalCartItem = cartItemRepository.findById(cartItemId);
        if(optionalCartItem.isEmpty()) throw new Exception("CartItem Not Found");
        CartItem cartItem = optionalCartItem.get();
        cartItem.setQuantity(quantity);
        cartItem.setTotalPrice(cartItem.getItem().getPrice()*quantity);
        return cartItemRepository.save(cartItem);
    }

    @Override
    public Cart removieItemFromCart(Long cartItemId, String token) throws Exception {
        User user = userMapper.toENTITY(userService.findUserByJwtToken(token.substring(7).trim()));
        Cart cart = cartRepository.findByCustomerId(user.getId());
        Optional<CartItem> optionalCartItem = cartItemRepository.findById(cartItemId);
        if(optionalCartItem.isEmpty()) throw new Exception("CartItem Not Found");
        CartItem cartItem = optionalCartItem.get();
        cart.getItem().remove(cartItem);
        return cartRepository.save(cart);
    }

    @Override
    public Long calculateCartTotals(Cart cart) throws Exception {
        long total = 0L;
        for(CartItem cartItem : cart.getItem()){
            total+=cartItem.getItem().getPrice()*cartItem.getQuantity();
        }
        return total;
    }

    @Override
    public Cart findCartById(Long id) throws Exception {
        Optional<Cart> optionalCart = cartRepository.findById(id);
        if(optionalCart.isEmpty()) throw new Exception("Cart Not Found with id : "+id);
        return optionalCart.get();
    }

    @Override
    public Cart findCartByUserId(String token) throws Exception {
        User user = userMapper.toENTITY(userService.findUserByJwtToken(token.substring(7).trim()));
        return cartRepository.findByCustomerId(user.getId());
    }

    @Override
    public Cart clearCart(String token) throws Exception {
        Cart cart = findCartByUserId(token);
        cart.getItem().clear();
        return cartRepository.save(cart);
    }
}

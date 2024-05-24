package com.foodify.resource.user;

import com.foodify.dto.cart.CartItemRequestDto;
import com.foodify.dto.cart.CartItemUpdateRequestDto;
import com.foodify.dto.mapper.UserAndUserResponseDtoMapper;
import com.foodify.entity.Cart;
import com.foodify.entity.CartItem;
import com.foodify.entity.User;
import com.foodify.service.impl.CartServiceImpl;
import com.foodify.service.impl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class CartController {

    private final CartServiceImpl cartService;
    private final UserAndUserResponseDtoMapper userMapper;
    private final UserServiceImpl userService;

    @PutMapping("/cart/add")
    public ResponseEntity<CartItem> addItemToCart(
            @RequestBody CartItemRequestDto request ,
            @RequestHeader("Authorization") String token) throws Exception
    {

        CartItem cartItem = cartService.addItemToCart(request , token);
        return ResponseEntity.status(HttpStatus.OK).body(cartItem);

    }

    @PutMapping("/cart-item/update")
    public ResponseEntity<CartItem> updateCaryItem(
            @RequestBody CartItemUpdateRequestDto request ,
            @RequestHeader("Authorization") String token) throws Exception
    {

        CartItem cartItem = cartService.updateCartItemQuantity(request.getCartItemId(), request.getQuantity());
        return ResponseEntity.status(HttpStatus.OK).body(cartItem);

    }

    @DeleteMapping("/cart-item/{id}/remove")
    public ResponseEntity<Cart> removeCartItem(
            @PathVariable Long id ,
            @RequestHeader("Authorization") String token) throws Exception
    {

        Cart cart = cartService.removieItemFromCart(id , token);
        return ResponseEntity.status(HttpStatus.OK).body(cart);

    }

    @PutMapping("/cart/clear")
    public ResponseEntity<Cart> clearCart(
            @RequestHeader("Authorization") String token) throws Exception
    {

        User user = userMapper.toENTITY.apply(userService.findUserByJwtToken(token.substring(7).trim()));
        Cart cart = cartService.clearCart(user.getId());
        return ResponseEntity.status(HttpStatus.OK).body(cart);

    }

    @GetMapping("/cart")
    public ResponseEntity<Cart> findUserCart(
            @RequestHeader("Authorization") String token) throws Exception
    {

        User user = userMapper.toENTITY.apply(userService.findUserByJwtToken(token.substring(7).trim()));
        Cart cart = cartService.findCartByUserId(user.getId());
        return ResponseEntity.status(HttpStatus.OK).body(cart);

    }

}
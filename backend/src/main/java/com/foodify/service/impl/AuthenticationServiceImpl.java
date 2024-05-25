package com.foodify.service.impl;

import com.foodify.Utils.cart.CartUtil;
import com.foodify.Utils.user.UserUtils;
import com.foodify.dto.authentication.LoginRequestDto;
import com.foodify.dto.user.UserRequestDto;
import com.foodify.repository.Cart.CartRepository;
import com.foodify.repository.user.UserRepository;
import com.foodify.dto.response.AuthenticationResponse;
import com.foodify.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private final UserRepository userRepository;
    private final JwtServiceImpl jwtService;
    private final PasswordEncoder encoder;
    private final AuthenticationManager authenticationManager;
    private final CartRepository cartRepository;

    @Override
    public AuthenticationResponse register(UserRequestDto request) throws Exception {
        if(userRepository.findByEmail(request.getEmail())!=null) throw new Exception("Email Already Exists");
        var createdUser = UserUtils.createUser.apply(request);
        createdUser.setPassword(encoder.encode(request.getPassword()));
        var savedUser = userRepository.save(createdUser);
        var cart = CartUtil.createCart.apply(savedUser);
        cartRepository.save(cart);
        return new AuthenticationResponse(jwtService.generateToken.apply(createdUser) , "Registration Success" , savedUser.getRole());
    }

    @Override
    public AuthenticationResponse login(LoginRequestDto request){
        var unauthenticated = new UsernamePasswordAuthenticationToken(request.getEmail() , request.getPassword());
        authenticationManager.authenticate(unauthenticated);
        var user = userRepository.findByEmail(request.getEmail());
        return new AuthenticationResponse(jwtService.generateToken.apply(user) , "Login Success" , user.getRole());
    }

}

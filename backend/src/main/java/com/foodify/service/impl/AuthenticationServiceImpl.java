package com.foodify.service.impl;

import com.foodify.Utils.UserUtils;
import com.foodify.dto.LoginRequestDto;
import com.foodify.dto.UserDto;
import com.foodify.entity.Cart;
import com.foodify.entity.User;
import com.foodify.repository.CartRepository;
import com.foodify.repository.UserRepository;
import com.foodify.response.AuthenticationResponse;
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
    public AuthenticationResponse register(UserDto request) throws Exception {

        if(userRepository.findByEmail(request.getEmail())!=null) throw new Exception("Email Already Exists");
        User user = UserUtils.createUser(request);
        user.setPassword(encoder.encode(request.getPassword()));
        User savedUser = userRepository.save(user);
        Cart cart = new Cart();
        cart.setCustomer(savedUser);
        cartRepository.save(cart);
        String token = jwtService.generateToken.apply(user);
        return new AuthenticationResponse(token , "Registration Success" , savedUser.getRole());

    }

    @Override
    public AuthenticationResponse login(LoginRequestDto request){

        var unauthenticated = new UsernamePasswordAuthenticationToken(request.getEmail() , request.getPassword());
        authenticationManager.authenticate(unauthenticated);
        User user = userRepository.findByEmail(request.getEmail());
        String token = jwtService.generateToken.apply(user);
        return new AuthenticationResponse(token , "Login Success" , user.getRole());

    }

}
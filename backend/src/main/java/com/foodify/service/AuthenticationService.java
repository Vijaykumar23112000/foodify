package com.foodify.service;


import com.foodify.Utils.UserUtils;
import com.foodify.dto.LoginRequestDto;
import com.foodify.dto.UserDto;
import com.foodify.entity.Cart;
import com.foodify.entity.User;
import com.foodify.repository.CartRepository;
import com.foodify.repository.UserRepository;
import com.foodify.response.AuthenticationResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final PasswordEncoder encoder;
    private final AuthenticationManager authenticationManager;
    private final CartRepository cartRepository;

    public AuthenticationResponse register(UserDto request) throws Exception {
        User isUser = userRepository.findByEmail(request.getEmail());
        if(isUser!=null){
//            return new AuthenticationResponse("","Email Already Exists" , null);
            throw new Exception("Email Already Exists");
        }
        User user = UserUtils.createUser(request);
        user.setPassword(encoder.encode(request.getPassword()));
        User savedUser = userRepository.save(user);
        Cart cart = new Cart();
        cart.setCustomer(savedUser);
        cartRepository.save(cart);
        String token = jwtService.generateToken.apply(user);
        return new AuthenticationResponse(token , "Registration Success" , savedUser.getRole());
    }

    public AuthenticationResponse login(LoginRequestDto request){
        var unauthenticated = new UsernamePasswordAuthenticationToken(request.getEmail() , request.getPassword());
        authenticationManager.authenticate(unauthenticated);
        User user = userRepository.findByEmail(request.getEmail());
        String token = jwtService.generateToken.apply(user);
        return new AuthenticationResponse(token , "Login Success" , user.getRole());
    }

}

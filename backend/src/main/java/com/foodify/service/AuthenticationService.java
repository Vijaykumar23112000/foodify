package com.foodify.service;


import com.foodify.Utils.UserUtils;
import com.foodify.dto.UserDto;
import com.foodify.entity.User;
import com.foodify.repository.UserRepository;
import com.foodify.response.AuthenticatoinResponse;
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

    public AuthenticatoinResponse register(UserDto request){
        User user = UserUtils.createUser(request);
        user.setPassword(encoder.encode(request.getPassword()));
        userRepository.save(user);
        String token = jwtService.generateToken.apply(user);
        return new AuthenticatoinResponse(token);
    }

    public AuthenticatoinResponse login(User request){
        var unauthenticated = new UsernamePasswordAuthenticationToken(request.getEmail() , request.getPassword());
        authenticationManager.authenticate(unauthenticated);
        User user = userRepository.findByEmail(request.getEmail());
        String token = jwtService.generateToken.apply(user);
        return new AuthenticatoinResponse(token);
    }
}

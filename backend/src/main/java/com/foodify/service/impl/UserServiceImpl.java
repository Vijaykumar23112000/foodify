package com.foodify.service.impl;

import com.foodify.entity.User;
import com.foodify.repository.UserRepository;
import com.foodify.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final JwtServiceImpl jwtService;

    @Override
    public User findUserByJwtToken(String token) {

        String email = jwtService.extractUsername.apply(token);
        if(email!=null){
            User user = userRepository.findByEmail(email);
            if(user!=null) return user;
            else throw new UsernameNotFoundException("User not found with email : "+email);
        }
        else throw new IllegalArgumentException("Invalid Token");

    }

    @Override
    public User findUserByEmail(String email) throws Exception {

        User user = userRepository.findByEmail(email);
        if(user==null) throw new Exception("User Not Found Exception");
        return user;

    }

}
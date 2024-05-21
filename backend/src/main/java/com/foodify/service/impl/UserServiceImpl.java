package com.foodify.service.impl;

import com.foodify.entity.User;
import com.foodify.repository.UserRepository;
import com.foodify.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final JwtServiceImpl jwtService;

    @Override
    public User findUserByJwtToken(String token) throws Exception {
        String email = jwtService.extractUsername.apply(token);
        return findUserByEmail(email);
    }

    @Override
    public User findUserByEmail(String email) throws Exception {
        User user = userRepository.findByEmail(email);
        if(user==null) throw new Exception("User Not Found Exception");
        return user;
    }
}

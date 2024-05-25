package com.foodify.service.impl;

import com.foodify.Utils.user.UserResponseDtoUtil;
import com.foodify.dto.user.UserResponseDto;
import com.foodify.repository.user.UserRepository;
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
    public UserResponseDto findUserByJwtToken(String token) {
        var email = jwtService.extractUsername.apply(token);
        if(email!=null){
            var user = userRepository.findByEmail(email);
            if(user!=null) return UserResponseDtoUtil.createUserResponseDto.apply(user);
            else throw new UsernameNotFoundException("User not found with email : "+email);
        }
        else throw new IllegalArgumentException("Invalid Token");
    }

    @Override
    public UserResponseDto findUserByEmail(String email) {
        var user = userRepository.findByEmail(email);
        if(user!=null) return UserResponseDtoUtil.createUserResponseDto.apply(user);
        else throw new UsernameNotFoundException("User not found with email : "+email);
    }

}

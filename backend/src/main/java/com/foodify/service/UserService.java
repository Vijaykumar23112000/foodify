package com.foodify.service;

import com.foodify.dto.user.UserResponseDto;

public interface UserService {
    UserResponseDto findUserByJwtToken(String token) throws Exception;
    UserResponseDto findUserByEmail(String email) throws Exception;
}

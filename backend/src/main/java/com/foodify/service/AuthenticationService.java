package com.foodify.service;

import com.foodify.dto.LoginRequestDto;
import com.foodify.dto.UserDto;
import com.foodify.response.AuthenticationResponse;

public interface AuthenticationService {

    AuthenticationResponse register(UserDto request) throws Exception;
    AuthenticationResponse login(LoginRequestDto request);
}

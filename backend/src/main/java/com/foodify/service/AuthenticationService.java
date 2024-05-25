package com.foodify.service;

import com.foodify.dto.authentication.LoginRequestDto;
import com.foodify.dto.user.UserRequestDto;
import com.foodify.dto.response.AuthenticationResponse;

public interface AuthenticationService {
    AuthenticationResponse register(UserRequestDto request) throws Exception;
    AuthenticationResponse login(LoginRequestDto request);
}

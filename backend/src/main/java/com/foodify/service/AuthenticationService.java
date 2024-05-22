package com.foodify.service;

import com.foodify.dto.LoginRequestDto;
import com.foodify.dto.UserRequestDto;
import com.foodify.response.AuthenticationResponse;

public interface AuthenticationService {

    AuthenticationResponse register(UserRequestDto request) throws Exception;
    AuthenticationResponse login(LoginRequestDto request);

}
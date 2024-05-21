package com.foodify.service;

import com.foodify.entity.User;

public interface UserService {

    User findUserByJwtToken(String token) throws Exception;
    User findUserByEmail(String email) throws Exception;
}

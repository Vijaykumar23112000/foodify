package com.foodify.Utils;

import com.foodify.dto.UserDto;
import com.foodify.entity.User;

public class UserUtils {

    public static User createUser(UserDto request){
        return User
                .builder()
                .fullName(request.getFullName())
                .email(request.getEmail())
                .role(request.getRole())
                /*.orders(null)
                .favorites(null)
                .addresses(null)*/
                .build();
    }
}

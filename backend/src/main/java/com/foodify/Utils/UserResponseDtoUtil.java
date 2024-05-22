package com.foodify.Utils;

import com.foodify.dto.UserResponseDto;
import com.foodify.entity.User;

import java.util.ArrayList;

public class UserResponseDtoUtil {

    public static UserResponseDto createUserResponseDto(User user){
        return UserResponseDto
                        .builder()
                        .id(user.getId())
                        .fullName(user.getFullName())
                        .email(user.getEmail())
                        .role(user.getRole())
                        .favorites(new ArrayList<>())
                        .addresses(new ArrayList<>())
                        .build();
    }
}

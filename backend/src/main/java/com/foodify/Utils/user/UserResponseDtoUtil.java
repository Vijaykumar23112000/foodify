package com.foodify.Utils.user;

import com.foodify.dto.user.UserResponseDto;
import com.foodify.entity.User;

public class UserResponseDtoUtil {

    public static UserResponseDto createUserResponseDto(User user){
        return UserResponseDto
                        .builder()
                        .id(user.getId())
                        .fullName(user.getFullName())
                        .email(user.getEmail())
                        .role(user.getRole())
                        .favorites(user.getFavorites())
                        .addresses(user.getAddresses())
                        .build();
    }
}

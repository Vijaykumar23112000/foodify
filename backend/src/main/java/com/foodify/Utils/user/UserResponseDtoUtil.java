package com.foodify.Utils.user;

import com.foodify.dto.user.UserResponseDto;
import com.foodify.entity.User;

import java.util.function.Function;

public class UserResponseDtoUtil {

    public static Function<User , UserResponseDto> createUserResponseDto = user ->
            UserResponseDto
                    .builder()
                    .id(user.getId())
                    .fullName(user.getFullName())
                    .email(user.getEmail())
                    .role(user.getRole())
                    .favorites(user.getFavorites())
                    .addresses(user.getAddresses())
                    .build();

}

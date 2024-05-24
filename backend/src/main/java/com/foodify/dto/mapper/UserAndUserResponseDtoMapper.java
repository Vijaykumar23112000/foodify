package com.foodify.dto.mapper;

import com.foodify.dto.user.UserResponseDto;
import com.foodify.entity.User;
import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class UserAndUserResponseDtoMapper {

    public Function<UserResponseDto , User> toENTITY = dto ->
                User
                        .builder()
                        .id(dto.getId())
                        .fullName(dto.getFullName())
                        .email(dto.getEmail())
                        .role(dto.getRole())
                        .favorites(dto.getFavorites())
                        .addresses(dto.getAddresses())
                        .build();

}

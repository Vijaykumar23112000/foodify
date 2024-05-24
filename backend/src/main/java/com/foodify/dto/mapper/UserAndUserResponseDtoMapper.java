package com.foodify.dto.mapper;

import com.foodify.dto.user.UserResponseDto;
import com.foodify.entity.User;
import org.springframework.stereotype.Component;

@Component
public class UserAndUserResponseDtoMapper {

    public UserResponseDto toDTO(User user){
        return UserResponseDto.builder()
                .id(user.getId())
                .fullName(user.getFullName())
                .email(user.getEmail())
                .role(user.getRole())
                .favorites(user.getFavorites())
                .addresses(user.getAddresses())
                .build();
    }

    public User toENTITY(UserResponseDto dto){
        return User.builder()
                .id(dto.getId())
                .fullName(dto.getFullName())
                .email(dto.getEmail())
                .role(dto.getRole())
                .favorites(dto.getFavorites())
                .addresses(dto.getAddresses())
                .build();
    }

}

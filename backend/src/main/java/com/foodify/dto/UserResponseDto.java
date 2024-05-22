package com.foodify.dto;

import com.foodify.entity.Address;
import com.foodify.enumeration.Role;
import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserResponseDto {

    private Long id;
    private String fullName;
    private String email;
    private Role role;
    private List<RestaurantDto> favorites;
    private List<Address> addresses;

}
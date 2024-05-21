package com.foodify.dto;


import com.foodify.enumeration.Role;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UserDto {
    private String fullName;
    private String email;
    private String password;
    private Role role;
}

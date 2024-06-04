package com.foodify.dto.restaurant;

import com.foodify.domain.ContactInformation;
import com.foodify.dto.user.UserResponseDto;
import com.foodify.entity.Address;
import com.foodify.entity.Order;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RestaurantResponseDto {

    private Long id;
    private String name;
    private String description;
    private String cuisineType;
    private String openingHours;
    private LocalDateTime registrationDate;
    private boolean open;
    private Address address;
    private ContactInformation contactInformation;
    private UserResponseDto owner;
    private List<Order> orders;
    private List<String> images;

}

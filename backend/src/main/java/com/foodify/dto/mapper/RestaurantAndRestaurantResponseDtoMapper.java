package com.foodify.dto.mapper;

import com.foodify.dto.restaurant.RestaurantResponseDto;
import com.foodify.dto.user.UserResponseDto;
import com.foodify.entity.Restaurant;
import org.springframework.stereotype.Component;

@Component
public class RestaurantAndRestaurantResponseDtoMapper {

    public RestaurantResponseDto toDTO(Restaurant restaurant , UserResponseDto user){

        return RestaurantResponseDto
                .builder()
                .id(restaurant.getId())
                .description(restaurant.getDescription())
                .cuisineType(restaurant.getCuisineType())
                .openingHours(restaurant.getOpeningHours())
                .registrationDate(restaurant.getRegistrationDate())
                .open(restaurant.isOpen())
                .address(restaurant.getAddress())
                .contactInformation(restaurant.getContactInformation())
                .owner(user)
                .orders(restaurant.getOrders())
                .images(restaurant.getImages())
                .build();

    }

}

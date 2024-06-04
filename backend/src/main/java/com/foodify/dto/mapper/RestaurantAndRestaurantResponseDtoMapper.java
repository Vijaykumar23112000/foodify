package com.foodify.dto.mapper;

import com.foodify.dto.restaurant.RestaurantResponseDto;
import com.foodify.dto.user.UserResponseDto;
import com.foodify.entity.Restaurant;
import com.foodify.myimpl.TriFunction;
import org.springframework.stereotype.Component;

@Component
public class RestaurantAndRestaurantResponseDtoMapper {

    public TriFunction<Restaurant , UserResponseDto , RestaurantResponseDto> toDTO = (restaurant, user) ->
            RestaurantResponseDto
                    .builder()
                    .id(restaurant.getId())
                    .name(restaurant.getName())
                    .description(restaurant.getDescription())
                    .cuisineType(restaurant.getCuisineType())
                    .openingHours(restaurant.getOpeningHours())
                    .registrationDate(restaurant.getRegistrationDate())
                    .open(restaurant.getOpen())
                    .address(restaurant.getAddress())
                    .contactInformation(restaurant.getContactInformation())
                    .owner(user)
                    .orders(restaurant.getOrders())
                    .images(restaurant.getImages())
                    .build();

}

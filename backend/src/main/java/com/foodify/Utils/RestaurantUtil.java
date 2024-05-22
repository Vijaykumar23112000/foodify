package com.foodify.Utils;

import com.foodify.dto.RestaurantRequestDto;
import com.foodify.entity.Address;
import com.foodify.entity.Restaurant;
import com.foodify.entity.User;

import java.time.LocalDateTime;

public class RestaurantUtil {

    public static Restaurant createRestaurant(RestaurantRequestDto restaurantRequest , User userRequest , Address address){

        return Restaurant
                .builder()
                .address(address)
                .contactInformation(restaurantRequest.getContactInformation())
                .cuisineType(restaurantRequest.getCuisineType())
                .description(restaurantRequest.getDescription())
                .images(restaurantRequest.getImages())
                .name(restaurantRequest.getName())
                .openingHours(restaurantRequest.getOpeningHours())
                .registrationDate(LocalDateTime.now())
                .owner(userRequest)
                .build();

    }

}

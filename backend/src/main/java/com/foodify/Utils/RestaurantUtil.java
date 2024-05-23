package com.foodify.Utils;

import com.foodify.dto.RestaurantRequestDto;
import com.foodify.entity.Address;
import com.foodify.entity.Restaurant;
import com.foodify.entity.User;

import java.time.LocalDateTime;
import java.util.ArrayList;

public class RestaurantUtil {

    public static Restaurant createRestaurant(RestaurantRequestDto restaurantRequest , User userRequest , Address address){

        return Restaurant
                .builder()
                .name(restaurantRequest.getName())
                .description(restaurantRequest.getDescription())
                .cuisineType(restaurantRequest.getCuisineType())
                .openingHours(restaurantRequest.getOpeningHours())
                .registrationDate(LocalDateTime.now())
                .open(true)
                .address(address)
                .contactInformation(restaurantRequest.getContactInformation())
                .owner(userRequest)
                .orders(new ArrayList<>())
                .images(restaurantRequest.getImages())
                .foods(new ArrayList<>())
                .build();

    }

}

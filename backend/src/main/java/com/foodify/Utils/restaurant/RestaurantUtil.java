package com.foodify.Utils.restaurant;

import com.foodify.dto.restaurant.RestaurantRequestDto;
import com.foodify.entity.Address;
import com.foodify.entity.Restaurant;
import com.foodify.entity.User;
import com.foodify.myimpl.QuadFunction;

import java.time.LocalDateTime;
import java.util.ArrayList;

public class RestaurantUtil {

    public static QuadFunction<RestaurantRequestDto , User , Address , Restaurant> createRestaurant = (restaurantRequest, userRequest, address) ->
            Restaurant
                    .builder()
                    .name(restaurantRequest.getName())
                    .description(restaurantRequest.getDescription())
                    .cuisineType(restaurantRequest.getCuisineType())
                    .openingHours(restaurantRequest.getOpeningHours())
                    .registrationDate(LocalDateTime.now())
                    .open(false)
                    .address(address)
                    .contactInformation(restaurantRequest.getContactInformation())
                    .owner(userRequest)
                    .orders(new ArrayList<>())
                    .images(restaurantRequest.getImages())
                    .foods(new ArrayList<>())
                    .build();

}

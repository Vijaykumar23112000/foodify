package com.foodify.service;

import com.foodify.dto.RestaurantDto;
import com.foodify.dto.RestaurantRequestDto;
import com.foodify.entity.Restaurant;
import com.foodify.entity.User;

import java.util.List;

public interface RestaurantService {

    Restaurant createRestaurant(RestaurantRequestDto restaurantRequest , User userRequest); // CreateRestaurantRequest
    Restaurant updateRestaurant(Long restaurantId , RestaurantRequestDto updatedRestaurantRequest) throws Exception;
    void deleteRestaurant(Long restaurantId) throws Exception;
    List<Restaurant> getAllRestaurant();   // -> Only Available For Non-Customer
    List<Restaurant> searchRestaurant(String keyword);
    Restaurant findRestaurantById(Long id) throws Exception;
    Restaurant findRestaurantByUserId(Long userId) throws Exception;
    RestaurantDto addToFavorites(Long restaurantId , User user) throws Exception;
    Restaurant updateRestaurantStatus(Long restaurantId) throws Exception;

}

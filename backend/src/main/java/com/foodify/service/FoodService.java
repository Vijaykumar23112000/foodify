package com.foodify.service;

import com.foodify.dto.food.FoodRequestDto;
import com.foodify.entity.Category;
import com.foodify.entity.Food;
import com.foodify.entity.Restaurant;

import java.util.List;

public interface FoodService {
    Food createFood(FoodRequestDto foodRequestDto , Category category , Restaurant restaurant);
    void deleteFood(Long foodId) throws Exception;
    List<Food> getRestaurantsFood(Long restaurantId , Boolean isVegetarian , Boolean isNonVeg , Boolean isSeasonable , String foodCategory);
    List<Food> searchFood(String keyword);
    Food findFoodById(Long foodId) throws Exception;
    Food updateAvailabilityStatus(Long foodId) throws Exception;
}
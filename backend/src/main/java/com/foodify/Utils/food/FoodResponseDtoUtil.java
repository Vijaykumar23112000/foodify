package com.foodify.Utils.food;

import com.foodify.dto.food.FoodResponseDto;
import com.foodify.dto.ingredient.IngredientsItemResponseDto;
import com.foodify.dto.restaurant.RestaurantResponseDto;
import com.foodify.entity.Food;
import com.foodify.myimpl.QuadFunction;

import java.util.List;

public class FoodResponseDtoUtil {


    public static QuadFunction<Food, RestaurantResponseDto, List<IngredientsItemResponseDto>,  FoodResponseDto> createFoodResponseDtoUtil = (food , restaurant , ingredients) ->
            FoodResponseDto
                    .builder()
                    .id(food.getId())
                    .name(food.getName())
                    .description(food.getDescription())
                    .price(food.getPrice())
                    .category(food.getFoodCategory())
                    .images(food.getImages())
                    .creationDate(food.getCreationDate())
                    .isSeasonal(food.getIsSeasonable())
                    .isVegetarian(food.getIsVegetarian())
                    .restaurant(restaurant)
                    .ingredients(ingredients)
                    .isAvailable(food.getAvailable())
                    .build();

}

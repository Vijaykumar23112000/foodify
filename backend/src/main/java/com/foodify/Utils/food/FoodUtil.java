package com.foodify.Utils.food;

import com.foodify.dto.food.FoodRequestDto;
import com.foodify.entity.Category;
import com.foodify.entity.Food;
import com.foodify.entity.Restaurant;
import com.foodify.myimpl.QuadFunction;

public class FoodUtil {

    public static QuadFunction<FoodRequestDto , Category , Restaurant , Food> createFood = (request , category , restaurant) ->
            Food
                    .builder()
                    .foodCategory(category)
                    .restaurant(restaurant)
                    .description(request.getDescription())
                    .images(request.getImages())
                    .name(request.getName())
                    .price(request.getPrice())
                    .ingredients(request.getIngredients())
                    .isSeasonable(request.getIsSeasonable())
                    .isVegetarian(request.getIsVegetarian())
                    .build();

}

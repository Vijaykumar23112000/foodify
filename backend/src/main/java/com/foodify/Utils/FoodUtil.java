package com.foodify.Utils;

import com.foodify.dto.FoodRequestDto;
import com.foodify.entity.Category;
import com.foodify.entity.Food;
import com.foodify.entity.Restaurant;

public class FoodUtil {

    public static Food createFood(FoodRequestDto req , Category category, Restaurant restaurant){

        return Food
                .builder()
                .foodCategory(category)
                .restaurant(restaurant)
                .description(req.getDescription())
                .images(req.getImages())
                .name(req.getName())
                .price(req.getPrice())
                .ingredients(req.getIngredients())
                .isSeasonable(req.getIsSeasonable())
                .isVegetarian(req.getIsVegetarian())
                .build();

    }

}

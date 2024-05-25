package com.foodify.Utils.ingredient;

import com.foodify.entity.IngredientCategory;
import com.foodify.entity.Restaurant;

import java.util.function.BiFunction;

public class IngredientCategoryUtil {

    public static BiFunction<Restaurant , String , IngredientCategory> createIngredientCategory = (restaurant, name) ->
            IngredientCategory
                    .builder()
                    .restaurant(restaurant)
                    .name(name)
                    .build();

}

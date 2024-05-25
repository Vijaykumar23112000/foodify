package com.foodify.Utils.ingredient;

import com.foodify.entity.IngredientCategory;
import com.foodify.entity.IngredientsItem;
import com.foodify.entity.Restaurant;
import com.foodify.myimpl.QuadFunction;

public class IngredientItemUtil {

    public static QuadFunction<String , Restaurant , IngredientCategory , IngredientsItem> createIngredientsItem = (ingredientName, restaurant, ingredientCategory) ->
            IngredientsItem
                    .builder()
                    .name(ingredientName)
                    .restaurant(restaurant)
                    .category(ingredientCategory)
                    .build();

}

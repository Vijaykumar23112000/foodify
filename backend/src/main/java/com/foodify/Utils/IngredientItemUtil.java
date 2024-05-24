package com.foodify.Utils;

import com.foodify.entity.IngredientCategory;
import com.foodify.entity.IngredientsItem;
import com.foodify.entity.Restaurant;

public class IngredientItemUtil {

    public static IngredientsItem createIngredientsItem(String ingredientName , Restaurant restaurant , IngredientCategory ingredientCategory){
        return IngredientsItem
                .builder()
                .name(ingredientName)
                .restaurant(restaurant)
                .category(ingredientCategory)
                .build();
    }

}

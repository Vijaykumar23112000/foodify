package com.foodify.Utils;

import com.foodify.entity.IngredientCategory;
import com.foodify.entity.Restaurant;

public class IngredientCategoryUtil {

    public static IngredientCategory createIngredientCategory(Restaurant restaurant , String name){
        return IngredientCategory
                .builder()
                .restaurant(restaurant)
                .name(name)
                .build();
    }

}

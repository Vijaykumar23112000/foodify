package com.foodify.Utils;

import com.foodify.entity.Category;
import com.foodify.entity.Restaurant;

public class CategoryUtil {

    public static Category createCategory(String name , Restaurant restaurant){
        return Category
                .builder()
                .name(name)
                .restaurant(restaurant)
                .build();
    }

}

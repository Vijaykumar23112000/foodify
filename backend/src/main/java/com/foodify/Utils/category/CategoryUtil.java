package com.foodify.Utils.category;

import com.foodify.entity.Category;
import com.foodify.entity.Restaurant;

import java.util.function.BiFunction;

public class CategoryUtil {

    public static BiFunction<String , Restaurant , Category> createCategory = (name , restaurant) ->
            Category
                    .builder()
                    .name(name)
                    .restaurant(restaurant)
                    .build();

}

package com.foodify.Utils.food;

import com.foodify.entity.Food;

import java.util.List;
import java.util.stream.Collectors;

public class FoodFilterUtil {

    public static List<Food> filterByVegetarian(List<Food> foods , boolean isVegetarian){
        return foods.stream()
                .filter(food -> food.isVegetarian() == isVegetarian)
                .collect(Collectors.toList());
    }

    public static List<Food> filterByNonVeg(List<Food> foods){
        return foods.stream()
                .filter(food -> !food.isVegetarian())
                .collect(Collectors.toList());
    }

    public static List<Food> filterBySeasonal(List<Food> foods , boolean isSeasonable){
        return foods.stream()
                .filter(food -> food.isSeasonable() == isSeasonable)
                .collect(Collectors.toList());
    }

    public static List<Food> filterByCategory(List<Food> foods , String foodCategory){
        return foods.stream()
                .filter(food -> {
                    if(food.getFoodCategory()!=null) return food.getFoodCategory().getName().equals(foodCategory);
                    return false;
//                    return food.getFoodCategory() != null && food.getFoodCategory().getName().equals(foodCategory);
                })
                .collect(Collectors.toList());
    }

}

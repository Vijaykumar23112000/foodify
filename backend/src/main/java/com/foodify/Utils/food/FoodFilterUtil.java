package com.foodify.Utils.food;

import com.foodify.entity.Food;

import java.util.List;
import java.util.function.BiFunction;
import java.util.function.Function;
import java.util.stream.Collectors;

public class FoodFilterUtil {

    public static BiFunction<List<Food> , Boolean, List<Food>> filterByVegetarian = (foods , isVegetarian) ->
            foods.stream()
                    .filter(food -> food.getIsVegetarian() == isVegetarian)
                    .collect(Collectors.toList());

    public static Function<List<Food> , List<Food>> filterByNonVeg = foods ->
            foods.stream()
                    .filter(food -> !food.getIsVegetarian())
                    .collect(Collectors.toList());

    public static BiFunction<List<Food> , Boolean , List<Food>> filterBySeasonal = (foods , isSeasonable) ->
            foods.stream()
                    .filter(food -> food.getIsSeasonable() == isSeasonable)
                    .collect(Collectors.toList());

    public static BiFunction<List<Food> , String , List<Food>> filterByCategory = (foods , foodCategory) ->
            foods.stream()
                    .filter(food -> {
                        if(food.getFoodCategory() != null) return food.getFoodCategory().getName().equals(foodCategory);
                        return false;
                    })
                    .collect(Collectors.toList());

}

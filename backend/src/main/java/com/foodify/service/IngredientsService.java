package com.foodify.service;

import com.foodify.entity.IngredientCategory;
import com.foodify.entity.IngredientsItem;

import java.util.List;

public interface IngredientsService {

    IngredientCategory createIngredientCategory(String name , Long restaurantId) throws Exception;
    IngredientCategory findIngredientCategoryById(Long id) throws Exception;
    List<IngredientCategory> findIngredientCategoryByRestaurantId(Long restaurantId) throws Exception;
    IngredientsItem createIngredientItem(Long restaurantId , String ingredientName , Long categoryId) throws Exception;
    List<IngredientsItem> findRestaurantIngredients(Long restaurantId);
    IngredientsItem updateStock(Long id) throws Exception;

}

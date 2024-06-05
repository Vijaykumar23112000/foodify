package com.foodify.service;

import com.foodify.dto.ingredient.IngredientCategoryResponseDto;
import com.foodify.dto.ingredient.IngredientsItemResponseDto;
import com.foodify.entity.IngredientCategory;
import com.foodify.entity.IngredientsItem;

import java.util.List;

public interface IngredientsService {
    IngredientCategoryResponseDto createIngredientCategory(String name , Long restaurantId) throws Exception;
    IngredientCategory findIngredientCategoryById(Long id) throws Exception;
    List<IngredientCategory> findIngredientCategoryByRestaurantId(Long restaurantId) throws Exception;
    IngredientsItemResponseDto createIngredientItem(Long restaurantId , String ingredientName , Long categoryId) throws Exception;
    List<IngredientsItem> findRestaurantIngredients(Long restaurantId);
    IngredientsItem updateStock(Long id) throws Exception;
}

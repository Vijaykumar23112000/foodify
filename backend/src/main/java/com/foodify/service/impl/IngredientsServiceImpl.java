package com.foodify.service.impl;

import com.foodify.Utils.IngredientCategoryUtil;
import com.foodify.Utils.IngredientItemUtil;
import com.foodify.entity.IngredientCategory;
import com.foodify.entity.IngredientsItem;
import com.foodify.entity.Restaurant;
import com.foodify.repository.IngredientCategoryRepository;
import com.foodify.repository.IngredientItemRepository;
import com.foodify.service.IngredientsService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class IngredientsServiceImpl implements IngredientsService {

    private final IngredientItemRepository ingredientItemRepository;
    private final IngredientCategoryRepository ingredientCategoryRepository;
    private final RestaurantServiceImpl restaurantService;

    @Override
    public IngredientCategory createIngredientCategory(String name, Long restaurantId) throws Exception {
        Restaurant restaurant = restaurantService.findRestaurantById(restaurantId);
        IngredientCategory category = IngredientCategoryUtil.createIngredientCategory(restaurant , name);
        return ingredientCategoryRepository.save(category);
    }

    @Override
    public IngredientCategory findIngredientCategoryById(Long id) throws Exception {
        Optional<IngredientCategory> optionalIngredientCategory = ingredientCategoryRepository.findById(id);
        if(optionalIngredientCategory.isEmpty()) throw new Exception("IngredientCategory Not Found");
        return optionalIngredientCategory.get();
    }

    @Override
    public List<IngredientCategory> findIngredientCategoryByRestaurantId(Long restaurantId) throws Exception {
        restaurantService.findRestaurantById(restaurantId);
        return ingredientCategoryRepository.findByRestaurantId(restaurantId);
    }

    @Override
    public IngredientsItem createIngredientItem(Long restaurantId, String ingredientName, Long categoryId) throws Exception {
        Restaurant restaurant = restaurantService.findRestaurantById(restaurantId);
        IngredientCategory ingredientCategory = findIngredientCategoryById(categoryId);
        IngredientsItem ingredientsItem = IngredientItemUtil.createIngredientsItem(ingredientName , restaurant , ingredientCategory);
        IngredientsItem savedIngredientItem = ingredientItemRepository.save(ingredientsItem);
        ingredientCategory.getIngredients().add(savedIngredientItem);
        return savedIngredientItem;
    }

    @Override
    public List<IngredientsItem> findRestaurantIngredients(Long restaurantId) {
        return ingredientItemRepository.findByRestaurantId(restaurantId);
    }

    @Override
    public IngredientsItem updateStock(Long id) throws Exception {
        Optional<IngredientsItem> optionalIngredientsItem = ingredientItemRepository.findById(id);
        if(optionalIngredientsItem.isEmpty()) throw new Exception("IngredientItem Not Found");
        IngredientsItem ingredientItem = optionalIngredientsItem.get();
        ingredientItem.setStock(!ingredientItem.isStock());
        return ingredientItemRepository.save(ingredientItem);
    }
}

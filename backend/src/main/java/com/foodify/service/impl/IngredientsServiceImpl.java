package com.foodify.service.impl;

import com.foodify.dto.ingredient.IngredientCategoryResponseDto;
import com.foodify.dto.ingredient.IngredientsItemResponseDto;
import com.foodify.dto.mapper.IngredientCategoryAndIngredientCategoryResponseDtoMapper;
import com.foodify.dto.mapper.IngredientsItemAndIngredientsItemResponseDtoMapper;
import com.foodify.entity.IngredientCategory;
import com.foodify.entity.IngredientsItem;
import com.foodify.repository.ingredient.IngredientCategoryRepository;
import com.foodify.repository.ingredient.IngredientItemRepository;
import com.foodify.service.IngredientsService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.foodify.Utils.ingredient.IngredientCategoryUtil.createIngredientCategory;
import static com.foodify.Utils.ingredient.IngredientItemUtil.createIngredientsItem;

@Service
@RequiredArgsConstructor
public class IngredientsServiceImpl implements IngredientsService {

    private final IngredientItemRepository ingredientItemRepository;
    private final IngredientCategoryRepository ingredientCategoryRepository;
    private final RestaurantServiceImpl restaurantService;
    private final IngredientCategoryAndIngredientCategoryResponseDtoMapper categoryMapper;
    private final IngredientsItemAndIngredientsItemResponseDtoMapper itemMapper;

    @Override
    public IngredientCategoryResponseDto createIngredientCategory(String name, Long restaurantId) throws Exception {
        var restaurant = restaurantService.findRestaurantById(restaurantId);
        var ingredientCategory = createIngredientCategory.apply(restaurant , name);
        return categoryMapper.toDTO.apply(ingredientCategoryRepository.save(ingredientCategory));
    }

    @Override
    public IngredientCategory findIngredientCategoryById(Long id) throws Exception {
        var optionalIngredientCategory = ingredientCategoryRepository.findById(id);
        if(optionalIngredientCategory.isEmpty()) throw new Exception("IngredientCategory Not Found");
        return optionalIngredientCategory.get();
    }

    @Override
    public List<IngredientCategory> findIngredientCategoryByRestaurantId(Long restaurantId) throws Exception {
        restaurantService.findRestaurantById(restaurantId);
        return ingredientCategoryRepository.findByRestaurantId(restaurantId);
    }

    @Override
    public IngredientsItemResponseDto createIngredientItem(Long restaurantId, String ingredientName, Long categoryId) throws Exception {
        var restaurant = restaurantService.findRestaurantById(restaurantId);
        var ingredientCategory = findIngredientCategoryById(categoryId);
        var ingredientsItem = createIngredientsItem.apply(ingredientName , restaurant , ingredientCategory);
        var savedIngredientItem = ingredientItemRepository.save(ingredientsItem);
        ingredientCategory.getIngredients().add(savedIngredientItem);
        return itemMapper.toDTO.apply(savedIngredientItem);
    }

    @Override
    public List<IngredientsItem> findRestaurantIngredients(Long restaurantId) {
        return ingredientItemRepository.findByRestaurantId(restaurantId);
    }

    @Override
    public IngredientsItem updateStock(Long id) throws Exception {
        var optionalIngredientsItem = ingredientItemRepository.findById(id);
        if(optionalIngredientsItem.isEmpty()) throw new Exception("IngredientItem Not Found");
        var ingredientItem = optionalIngredientsItem.get();
        ingredientItem.setIsStock(!ingredientItem.getIsStock());
        return ingredientItemRepository.save(ingredientItem);
    }
}

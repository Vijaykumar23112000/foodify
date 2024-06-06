package com.foodify.service.impl;

import com.foodify.Utils.food.FoodResponseDtoUtil;
import com.foodify.dto.food.FoodRequestDto;
import com.foodify.dto.food.FoodResponseDto;
import com.foodify.dto.ingredient.IngredientsItemResponseDto;
import com.foodify.dto.mapper.IngredientsItemAndIngredientsItemResponseDtoMapper;
import com.foodify.dto.mapper.RestaurantAndRestaurantResponseDtoMapper;
import com.foodify.entity.Category;
import com.foodify.entity.Food;
import com.foodify.entity.IngredientsItem;
import com.foodify.entity.Restaurant;
import com.foodify.repository.food.FoodRepository;
import com.foodify.service.FoodService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.foodify.Utils.food.FoodFilterUtil.*;
import static com.foodify.Utils.food.FoodUtil.createFood;

@Service
@RequiredArgsConstructor
public class FoodServiceImpl implements FoodService {

    private final FoodRepository foodRepository;
    private final RestaurantAndRestaurantResponseDtoMapper restaurantMapper;
    private final UserServiceImpl userService;
    private final IngredientsItemAndIngredientsItemResponseDtoMapper ingredientsMapper;

    @Override
    public FoodResponseDto createFood(FoodRequestDto foodRequestDto, Category category, Restaurant restaurant) throws Exception {
        var food = createFood.apply(foodRequestDto , category , restaurant);
        var savedFood = foodRepository.save(food);
        restaurant.getFoods().add(savedFood);
        var restaurantResponseDto = restaurantMapper.toDTO.apply(restaurant , userService.findUserByEmail(restaurant.getOwner().getEmail()));
        List<IngredientsItem> ingredients = savedFood.getIngredients();
        List<IngredientsItemResponseDto> dtos = ingredients.stream()
                .map(ingredientsMapper.toDTO)
                .toList();
        return FoodResponseDtoUtil.createFoodResponseDtoUtil.apply(savedFood , restaurantResponseDto , dtos);
    }

    @Override
    public void deleteFood(Long foodId) throws Exception {
        var food = findFoodById(foodId);
        food.setRestaurant(null);
        foodRepository.save(food);
    }

    @Override
    public List<Food> getRestaurantsFood(Long restaurantId, Boolean isVegetarian, Boolean isNonVeg, Boolean isSeasonable, String foodCategory) {
        var foods = foodRepository.findByRestaurantId(restaurantId);
        if(isVegetarian) foods = filterByVegetarian.apply(foods , isVegetarian);
        if(isNonVeg) foods = filterByNonVeg.apply(foods);
        if(isSeasonable) foods = filterBySeasonal.apply(foods , isSeasonable);
        if(foodCategory != null && !foodCategory.isEmpty()) foods = filterByCategory.apply(foods , foodCategory);
        return foods;
    }

    @Override
    public List<Food> searchFood(String keyword) {
        return foodRepository.searchFood(keyword);
    }

    @Override
    public Food findFoodById(Long foodId) throws Exception {
        var optionalFood = foodRepository.findById(foodId);
        if(optionalFood.isEmpty()) throw new Exception("Food Doesn't Exist");
        return optionalFood.get();
    }

    @Override
    public Food updateAvailabilityStatus(Long foodId) throws Exception {
        var food = findFoodById(foodId);
        food.setAvailable(!food.getAvailable());
        return foodRepository.save(food);
    }

}

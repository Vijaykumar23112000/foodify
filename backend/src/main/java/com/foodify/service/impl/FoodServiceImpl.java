package com.foodify.service.impl;

import com.foodify.Utils.food.FoodUtil;
import com.foodify.dto.food.FoodRequestDto;
import com.foodify.entity.Category;
import com.foodify.entity.Food;
import com.foodify.entity.Restaurant;
import com.foodify.repository.food.FoodRepository;
import com.foodify.service.FoodService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import static com.foodify.Utils.food.FoodFilterUtil.*;

@Service
@RequiredArgsConstructor
public class FoodServiceImpl implements FoodService {

    private final FoodRepository foodRepository;

    @Override
    public Food createFood(FoodRequestDto foodRequestDto, Category category, Restaurant restaurant) {
        Food food = FoodUtil.createFood(foodRequestDto , category , restaurant);
        Food savedFood = foodRepository.save(food);
        restaurant.getFoods().add(savedFood);
        return savedFood;
    }

    @Override
    public void deleteFood(Long foodId) throws Exception {
        Food food = findFoodById(foodId);
        food.setRestaurant(null);
        foodRepository.save(food);
    }

    @Override
    public List<Food> getRestaurantsFood(Long restaurantId, boolean isVegetarian, boolean isNonVeg, boolean isSeasonable, String foodCategory) {
        List<Food> foods = foodRepository.findByRestaurantId(restaurantId);
        if(isVegetarian) foods = filterByVegetarian(foods , isVegetarian);//true
        if(isNonVeg) foods = filterByNonVeg(foods);
        if(isSeasonable) foods = filterBySeasonal(foods , isSeasonable);//true
        if(foodCategory != null && !foodCategory.isEmpty()) foods = filterByCategory(foods , foodCategory);
        return foods;
    }

    @Override
    public List<Food> searchFood(String keyword) {
        return foodRepository.searchFood(keyword);
    }

    @Override
    public Food findFoodById(Long foodId) throws Exception {
        Optional<Food> optionalFood = foodRepository.findById(foodId);
        if(optionalFood.isEmpty()) throw new Exception("Food Doesn't Exist");
        return optionalFood.get();
    }

    @Override
    public Food updateAvailabilityStatus(Long foodId) throws Exception {
        Food food = findFoodById(foodId);
        food.setAvailable(!food.isAvailable());
        return foodRepository.save(food);
    }

}

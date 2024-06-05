package com.foodify.service.impl;

import com.foodify.Utils.category.CategoryUtil;
import com.foodify.entity.Category;
import com.foodify.repository.category.CategoryRepository;
import com.foodify.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;
    private final RestaurantServiceImpl restaurantService;

    @Override
    public Category createCategory(String name, Long userId) throws Exception {
        var restaurant = restaurantService.findRestaurantByUserId(userId);
        var category = CategoryUtil.createCategory.apply(name , restaurant);
        return categoryRepository.save(category);
    }

    @Override
    public List<Category> findCategoryByRestaurantId(Long id) throws Exception {
        return categoryRepository.findByRestaurantId(id);
    }

    @Override
    public Category findCategoryById(Long id) throws Exception {
        var optionalCategory = categoryRepository.findById(id);
        if(optionalCategory.isEmpty()) throw new Exception("Category Not Found");
        return optionalCategory.get();
    }

}

package com.foodify.repository;

import com.foodify.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category , Long> {

    List<Category> findByRestaurantId(Long restaurantId);

}

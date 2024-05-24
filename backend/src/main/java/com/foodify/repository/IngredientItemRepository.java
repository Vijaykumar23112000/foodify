package com.foodify.repository;

import com.foodify.entity.IngredientsItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IngredientItemRepository extends JpaRepository<IngredientsItem , Long> {

    List<IngredientsItem> findByRestaurantId(Long restaurantId);

}

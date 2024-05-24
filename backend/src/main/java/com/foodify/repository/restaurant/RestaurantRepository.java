package com.foodify.repository.restaurant;

import com.foodify.entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant , Long> {
    Restaurant findByOwnerId(Long userId);
    @Query("SELECT r FROM Restaurant r WHERE lower(r.name) LIKE lower(concat('%',:keyword,'%')) OR lower(r.cuisineType) LIKE lower(concat('%',:keyword,'%'))")
    List<Restaurant> findBySearchQuery(@Param("keyword") String keyword);
}
package com.foodify.resource;

import com.foodify.entity.Food;
import com.foodify.service.impl.FoodServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/food")
public class FoodController {

    private final FoodServiceImpl foodService;


    @GetMapping("/search")
    public ResponseEntity<List<Food>> searchFood(
            @RequestParam String keyword ,
            @RequestHeader("Authorization") String token) throws Exception
    {

        List<Food> foods = foodService.searchFood(keyword);
        return ResponseEntity.status(HttpStatus.CREATED).body(foods);

    }

    @GetMapping("/restaurant/{restaurantId}")
    public ResponseEntity<List<Food>> getRestaurantFood (
            @RequestParam boolean isVegetarian,
            @RequestParam boolean isSeasonal,
            @RequestParam boolean isNonVeg,
            @RequestParam(required = false) String foodCategory,
            @PathVariable Long restaurantId,
            @RequestHeader("Authorization") String token) throws Exception
    {

        List<Food> foods = foodService.getRestaurantsFood(restaurantId , isVegetarian , isNonVeg , isSeasonal , foodCategory);
        return ResponseEntity.status(HttpStatus.OK).body(foods);

    }

}

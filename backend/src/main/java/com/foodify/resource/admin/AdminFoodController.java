package com.foodify.resource.admin;

import com.foodify.domain.MessageResponse;
import com.foodify.dto.food.FoodRequestDto;
import com.foodify.entity.Food;
import com.foodify.service.impl.FoodServiceImpl;
import com.foodify.service.impl.RestaurantServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/admin/food")
public class AdminFoodController {

    private final FoodServiceImpl foodService;
    private final RestaurantServiceImpl restaurantService;

    @PostMapping
    public ResponseEntity<Food> createFood(
            @RequestBody FoodRequestDto request,
            @RequestHeader("Authorization") String token) throws Exception
    {

        var restaurant = restaurantService.findRestaurantById(request.getRestaurantId());
        var food = foodService.createFood(request , request.getCategory() , restaurant);
        return ResponseEntity.status(HttpStatus.CREATED).body(food);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MessageResponse> deleteFood(
            @PathVariable Long id,
            @RequestHeader("Authorization") String token) throws Exception
    {

        foodService.deleteFood(id);
        return ResponseEntity.status(HttpStatus.OK).body(new MessageResponse("Food Deleted Successfully"));

    }

    @PutMapping("/{id}")
    public ResponseEntity<Food> updateFoodAvailability(
            @PathVariable Long id,
            @RequestHeader("Authorization") String token) throws Exception
    {

        var food = foodService.updateAvailabilityStatus(id);
        return ResponseEntity.status(HttpStatus.OK).body(food);

    }

}

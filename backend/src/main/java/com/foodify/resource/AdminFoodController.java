package com.foodify.resource;

import com.foodify.domain.MessageResponse;
import com.foodify.dto.FoodRequestDto;
import com.foodify.entity.Food;
import com.foodify.entity.Restaurant;
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

        Restaurant restaurant = restaurantService.findRestaurantById(request.getRestaurantId());
        Food food = foodService.createFood(request , request.getCategory() , restaurant);
        return ResponseEntity.status(HttpStatus.CREATED).body(food);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MessageResponse> deleteFood(
            @PathVariable Long id,
            @RequestBody FoodRequestDto request,
            @RequestHeader("Authorization") String token) throws Exception
    {

        foodService.deleteFood(id);
        MessageResponse msg = new MessageResponse("Food Deleted Successfully");
        return ResponseEntity.status(HttpStatus.OK).body(msg);

    }

    @PutMapping("/{id}")
    public ResponseEntity<Food> updateFoodAvailability(
            @PathVariable Long id,
            @RequestBody FoodRequestDto request,
            @RequestHeader("Authorization") String token) throws Exception
    {

        Food food = foodService.updateAvailabilityStatus(id);
        return ResponseEntity.status(HttpStatus.OK).body(food);

    }

}

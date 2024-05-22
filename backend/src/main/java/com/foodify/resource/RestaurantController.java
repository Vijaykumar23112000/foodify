package com.foodify.resource;

import com.foodify.dto.RestaurantDto;
import com.foodify.dto.mapper.UserAndUserResponseDtoMapper;
import com.foodify.entity.Restaurant;
import com.foodify.entity.User;
import com.foodify.service.impl.RestaurantServiceImpl;
import com.foodify.service.impl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/restaurants")
@RequiredArgsConstructor
public class RestaurantController {

    private final RestaurantServiceImpl restaurantService;
    private final UserServiceImpl userService;
    private final UserAndUserResponseDtoMapper mapper;

    @GetMapping("/search")
    public ResponseEntity<List<Restaurant>> searchRestaurant(
            @RequestHeader("Authorization") String token,
            @RequestParam String keyWord
    ) throws Exception
    {
//        User user = mapper.toENTITY(userService.findUserByJwtToken(token));
        List<Restaurant> restaurants = restaurantService.searchRestaurant(keyWord);
        return ResponseEntity.status(HttpStatus.OK).body(restaurants);
    }

    @GetMapping()
    public ResponseEntity<List<Restaurant>> getAllRestaurants(
            @RequestHeader("Authorization") String token
    ) throws Exception
    {
//        User user = mapper.toENTITY(userService.findUserByJwtToken(token));
        List<Restaurant> restaurants = restaurantService.getAllRestaurant();
        return ResponseEntity.status(HttpStatus.OK).body(restaurants);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Restaurant> findRestaurantById(
            @RequestHeader("Authorization") String token,
            @PathVariable Long id
    ) throws Exception
    {
//        User user = mapper.toENTITY(userService.findUserByJwtToken(token));
        Restaurant restaurant = restaurantService.findRestaurantById(id);
        return ResponseEntity.status(HttpStatus.OK).body(restaurant);
    }

    @PutMapping("/{id}/add-favorites")
    public ResponseEntity<RestaurantDto> addToFavorites(
            @RequestHeader("Authorization") String token,
            @PathVariable Long id
    ) throws Exception
    {
        User user = mapper.toENTITY(userService.findUserByJwtToken(token));
        RestaurantDto restaurants = restaurantService.addToFavorites(id , user);
        return ResponseEntity.status(HttpStatus.OK).body(restaurants);
    }

}

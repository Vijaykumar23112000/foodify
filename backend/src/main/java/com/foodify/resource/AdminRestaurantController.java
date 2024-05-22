package com.foodify.resource;

import com.foodify.domain.MessageResponse;
import com.foodify.dto.RestaurantRequestDto;
import com.foodify.dto.mapper.UserAndUserResponseDtoMapper;
import com.foodify.entity.Restaurant;
import com.foodify.entity.User;
import com.foodify.service.impl.RestaurantServiceImpl;
import com.foodify.service.impl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/admin/restaurants")
public class AdminRestaurantController {

    private final RestaurantServiceImpl restaurantService;
    private final UserServiceImpl userService;
    private final UserAndUserResponseDtoMapper mapper;
    @PostMapping()
    public ResponseEntity<Restaurant> createRestaurant(
            @RequestBody RestaurantRequestDto request,
            @RequestHeader("Authorization") String token
            )
    {
        User user = mapper.toENTITY(userService.findUserByJwtToken(token));
        Restaurant restaurant = restaurantService.createRestaurant(request , user);
        return ResponseEntity.status(HttpStatus.CREATED).body(restaurant);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Restaurant> updateRestaurant(
            @RequestBody RestaurantRequestDto request,
            @RequestHeader("Authorization") String token,
            @PathVariable Long id
    ) throws Exception
    {
//        User user = mapper.toENTITY(userService.findUserByJwtToken(token));
        Restaurant restaurant = restaurantService.updateRestaurant(id , request);
        return ResponseEntity.status(HttpStatus.OK).body(restaurant);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MessageResponse> deleteRestaurant(
            @RequestHeader("Authorization") String token,
            @PathVariable Long id
    ) throws Exception
    {
//        User user = mapper.toENTITY(userService.findUserByJwtToken(token));
        restaurantService.deleteRestaurant(id);
        MessageResponse msg = new MessageResponse("Restaurant Deleted Successfully");
        return ResponseEntity.status(HttpStatus.OK).body(msg);
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<Restaurant> updateRestaurantStatus(
            @RequestHeader("Authorization") String token,
            @PathVariable Long id
    ) throws Exception
    {
//        User user = mapper.toENTITY(userService.findUserByJwtToken(token));
        Restaurant restaurant = restaurantService.updateRestaurantStatus(id);
        return ResponseEntity.status(HttpStatus.OK).body(restaurant);
    }

    @GetMapping("/user")
    public ResponseEntity<Restaurant> findRestaurantByUserId(
            @RequestHeader("Authorization") String token
    ) throws Exception
    {
        User user = mapper.toENTITY(userService.findUserByJwtToken(token));
        Restaurant restaurant = restaurantService.findRestaurantByUserId(user.getId());
        return ResponseEntity.status(HttpStatus.OK).body(restaurant);
    }

}
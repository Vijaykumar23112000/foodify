package com.foodify.resource.user;

import com.foodify.Utils.restaurant.RestaurantConverter;
import com.foodify.dto.restaurant.RestaurantDto;
import com.foodify.dto.restaurant.RestaurantResponseDto;
import com.foodify.dto.mapper.RestaurantAndRestaurantResponseDtoMapper;
import com.foodify.dto.mapper.UserAndUserResponseDtoMapper;
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
    private final UserAndUserResponseDtoMapper userMapper;
    private final RestaurantAndRestaurantResponseDtoMapper restaurantMapper;
    private final RestaurantConverter converter;

    @GetMapping("/search")
    public ResponseEntity<List<RestaurantResponseDto>> searchRestaurant(
            @RequestHeader("Authorization") String token,
            @RequestParam String keyWord) throws Exception
    {

        var userResponseDto = userService.findUserByJwtToken(token.substring(7).trim());
        var restaurants = restaurantService.searchRestaurant(keyWord);
        var dtos = converter.convert(restaurants , userResponseDto);
        return ResponseEntity.status(HttpStatus.OK).body(dtos);

    }

    @GetMapping
    public ResponseEntity<List<RestaurantResponseDto>> getAllRestaurants(
            @RequestHeader("Authorization") String token) throws Exception
    {

        var userResponseDto = userService.findUserByJwtToken(token.substring(7).trim());
        var restaurants = restaurantService.getAllRestaurant();
        var dtos = converter.convert(restaurants , userResponseDto);
        return ResponseEntity.status(HttpStatus.OK).body(dtos);

    }

    @GetMapping("/{id}")
    public ResponseEntity<RestaurantResponseDto> findRestaurantById(
            @RequestHeader("Authorization") String token,
            @PathVariable Long id) throws Exception
    {

        var userResponseDto = userService.findUserByJwtToken(token.substring(7).trim());
        var restaurant = restaurantService.findRestaurantById(id);
        var restaurantResponseDto = restaurantMapper.toDTO.apply(restaurant , userResponseDto);
        return ResponseEntity.status(HttpStatus.OK).body(restaurantResponseDto);

    }

    @PutMapping("/{id}/add-favorites")
    public ResponseEntity<RestaurantDto> addToFavorites(
            @RequestHeader("Authorization") String token,
            @PathVariable Long id) throws Exception
    {

        var user = userMapper.toENTITY.apply(userService.findUserByJwtToken(token.substring(7).trim()));
        var restaurantDto = restaurantService.addToFavorites(id , user);
        return ResponseEntity.status(HttpStatus.OK).body(restaurantDto);

    }

}

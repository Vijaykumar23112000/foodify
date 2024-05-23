package com.foodify.resource;

import com.foodify.Utils.RestaurantConverter;
import com.foodify.dto.RestaurantDto;
import com.foodify.dto.RestaurantResponseDto;
import com.foodify.dto.UserResponseDto;
import com.foodify.dto.mapper.RestaurantAndRestaurantResponseDtoMapper;
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
    private final UserAndUserResponseDtoMapper userMapper;
    private final RestaurantAndRestaurantResponseDtoMapper restaurantMapper;
    private final RestaurantConverter converter;

    @GetMapping("/search")
    public ResponseEntity<List<RestaurantResponseDto>> searchRestaurant(
            @RequestHeader("Authorization") String token,
            @RequestParam String keyWord
    ) throws Exception
    {
        UserResponseDto userResponseDto = userService.findUserByJwtToken(token.substring(7).trim());
        List<Restaurant> restaurants = restaurantService.searchRestaurant(keyWord);
        List<RestaurantResponseDto> dtos = converter.convert(restaurants , userResponseDto);
        return ResponseEntity.status(HttpStatus.OK).body(dtos);
    }

    @GetMapping()
    public ResponseEntity<List<RestaurantResponseDto>> getAllRestaurants(
            @RequestHeader("Authorization") String token
    ) throws Exception
    {
        UserResponseDto userResponseDto = userService.findUserByJwtToken(token.substring(7).trim());
        List<Restaurant> restaurants = restaurantService.getAllRestaurant();
        List<RestaurantResponseDto> dtos = converter.convert(restaurants , userResponseDto);
        return ResponseEntity.status(HttpStatus.OK).body(dtos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<RestaurantResponseDto> findRestaurantById(
            @RequestHeader("Authorization") String token,
            @PathVariable Long id
    ) throws Exception
    {
        UserResponseDto userResponseDto = userService.findUserByJwtToken(token.substring(7).trim());
        Restaurant restaurant = restaurantService.findRestaurantById(id);
        RestaurantResponseDto restaurantResponseDto = restaurantMapper.toDTO(restaurant , userResponseDto);
        return ResponseEntity.status(HttpStatus.OK).body(restaurantResponseDto);
    }

    @PutMapping("/{id}/add-favorites")
    public ResponseEntity<RestaurantDto> addToFavorites(
            @RequestHeader("Authorization") String token,
            @PathVariable Long id
    ) throws Exception
    {
        User user = userMapper.toENTITY(userService.findUserByJwtToken(token.substring(7).trim()));
        RestaurantDto restaurantDto = restaurantService.addToFavorites(id , user);
        return ResponseEntity.status(HttpStatus.OK).body(restaurantDto);
    }

}

package com.foodify.resource.admin;

import com.foodify.domain.MessageResponse;
import com.foodify.dto.restaurant.RestaurantRequestDto;
import com.foodify.dto.restaurant.RestaurantResponseDto;
import com.foodify.dto.mapper.RestaurantAndRestaurantResponseDtoMapper;
import com.foodify.dto.mapper.UserAndUserResponseDtoMapper;
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
    private final UserAndUserResponseDtoMapper userMapper;
    private final RestaurantAndRestaurantResponseDtoMapper restaurantMapper;

    @PostMapping
    public ResponseEntity<RestaurantResponseDto> createRestaurant(
            @RequestBody RestaurantRequestDto request,
            @RequestHeader("Authorization") String token)
    {

        var userResponseDto = userService.findUserByJwtToken(token.substring(7).trim());
        var restaurant = restaurantService.createRestaurant(request , userMapper.toENTITY.apply(userResponseDto));
        var restaurantResponseDto = restaurantMapper.toDTO.apply(restaurant , userResponseDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(restaurantResponseDto);

    }

    @PutMapping("/{id}")
    public ResponseEntity<RestaurantResponseDto> updateRestaurant(
            @RequestBody RestaurantRequestDto request,
            @RequestHeader("Authorization") String token,
            @PathVariable Long id) throws Exception
    {

        var userResponseDto = userService.findUserByJwtToken(token.substring(7).trim());
        var restaurant = restaurantService.updateRestaurant(id , request);
        var restaurantResponseDto = restaurantMapper.toDTO.apply(restaurant , userResponseDto);
        return ResponseEntity.status(HttpStatus.OK).body(restaurantResponseDto);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MessageResponse> deleteRestaurant(
            @RequestHeader("Authorization") String token,
            @PathVariable Long id) throws Exception
    {

        restaurantService.deleteRestaurant(id);
        return ResponseEntity.status(HttpStatus.OK).body(new MessageResponse("Restaurant Deleted Successfully"));

    }

    @PutMapping("/{id}/status")
    public ResponseEntity<RestaurantResponseDto> updateRestaurantStatus(
            @RequestHeader("Authorization") String token,
            @PathVariable Long id) throws Exception
    {

        var userResponseDto = userService.findUserByJwtToken(token.substring(7).trim());
        var restaurant = restaurantService.updateRestaurantStatus(id);
        var restaurantResponseDto = restaurantMapper.toDTO.apply(restaurant , userResponseDto);
        return ResponseEntity.status(HttpStatus.OK).body(restaurantResponseDto);

    }

    @GetMapping("/user")
    public ResponseEntity<RestaurantResponseDto> findRestaurantByUserId(
            @RequestHeader("Authorization") String token) throws Exception
    {

        var userResponseDto = userService.findUserByJwtToken(token.substring(7).trim());
        var restaurant = restaurantService.findRestaurantByUserId(userResponseDto.getId());
        var restaurantResponseDto = restaurantMapper.toDTO.apply(restaurant , userResponseDto);
        return ResponseEntity.status(HttpStatus.OK).body(restaurantResponseDto);

    }

}
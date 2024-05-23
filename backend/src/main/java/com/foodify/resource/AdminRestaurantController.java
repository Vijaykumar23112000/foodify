package com.foodify.resource;

import com.foodify.domain.MessageResponse;
import com.foodify.dto.RestaurantRequestDto;
import com.foodify.dto.RestaurantResponseDto;
import com.foodify.dto.UserResponseDto;
import com.foodify.dto.mapper.RestaurantAndRestaurantResponseDtoMapper;
import com.foodify.dto.mapper.UserAndUserResponseDtoMapper;
import com.foodify.entity.Restaurant;
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

    @PostMapping()
    public ResponseEntity<RestaurantResponseDto> createRestaurant(
            @RequestBody RestaurantRequestDto request,
            @RequestHeader("Authorization") String token
            )
    {
        UserResponseDto userResponseDto = userService.findUserByJwtToken(token.substring(7).trim());
        Restaurant restaurant = restaurantService.createRestaurant(request , userMapper.toENTITY(userResponseDto));
        RestaurantResponseDto restaurantResponseDto = restaurantMapper.toDTO(restaurant , userResponseDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(restaurantResponseDto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<RestaurantResponseDto> updateRestaurant(
            @RequestBody RestaurantRequestDto request,
            @RequestHeader("Authorization") String token,
            @PathVariable Long id
    ) throws Exception
    {
        UserResponseDto userResponseDto = userService.findUserByJwtToken(token.substring(7).trim());
        Restaurant restaurant = restaurantService.updateRestaurant(id , request);
        RestaurantResponseDto restaurantResponseDto = restaurantMapper.toDTO(restaurant , userResponseDto);
        return ResponseEntity.status(HttpStatus.OK).body(restaurantResponseDto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MessageResponse> deleteRestaurant(
            @RequestHeader("Authorization") String token,
            @PathVariable Long id
    ) throws Exception
    {
        restaurantService.deleteRestaurant(id);
        MessageResponse msg = new MessageResponse("Restaurant Deleted Successfully");
        return ResponseEntity.status(HttpStatus.OK).body(msg);
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<RestaurantResponseDto> updateRestaurantStatus(
            @RequestHeader("Authorization") String token,
            @PathVariable Long id
    ) throws Exception
    {
        UserResponseDto userResponseDto = userService.findUserByJwtToken(token.substring(7).trim());
        Restaurant restaurant = restaurantService.updateRestaurantStatus(id);
        RestaurantResponseDto restaurantResponseDto = restaurantMapper.toDTO(restaurant , userResponseDto);
        return ResponseEntity.status(HttpStatus.OK).body(restaurantResponseDto);
    }

    @GetMapping("/user")
    public ResponseEntity<RestaurantResponseDto> findRestaurantByUserId(
            @RequestHeader("Authorization") String token
    ) throws Exception
    {
        UserResponseDto userResponseDto = userService.findUserByJwtToken(token.substring(7).trim());
        Restaurant restaurant = restaurantService.findRestaurantByUserId(userResponseDto.getId());
        RestaurantResponseDto restaurantResponseDto = restaurantMapper.toDTO(restaurant , userResponseDto);
        return ResponseEntity.status(HttpStatus.OK).body(restaurantResponseDto);
    }

}
package com.foodify.Utils.restaurant;

import com.foodify.dto.restaurant.RestaurantResponseDto;
import com.foodify.dto.user.UserResponseDto;
import com.foodify.dto.mapper.RestaurantAndRestaurantResponseDtoMapper;
import com.foodify.entity.Restaurant;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class RestaurantConverter {

    private final RestaurantAndRestaurantResponseDtoMapper mapper;

    public List<RestaurantResponseDto> convert(List<Restaurant> restaurants , UserResponseDto user){
        List<RestaurantResponseDto> dtos = new ArrayList<>();
        for(Restaurant r : restaurants){
            dtos.add(mapper.toDTO.apply(r , user));
        }
        return dtos;
    }

}

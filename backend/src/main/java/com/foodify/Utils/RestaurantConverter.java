package com.foodify.Utils;

import com.foodify.dto.restaurant.RestaurantResponseDto;
import com.foodify.dto.user.UserResponseDto;
import com.foodify.dto.mapper.RestaurantAndRestaurantResponseDtoMapper;
import com.foodify.entity.Restaurant;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Component
public class RestaurantConverter {

    private final RestaurantAndRestaurantResponseDtoMapper mapper;

    public List<RestaurantResponseDto> convert(List<Restaurant> restaurants , UserResponseDto user){
        List<RestaurantResponseDto> dtos = new ArrayList<>();
        for(Restaurant r : restaurants){
            dtos.add(mapper.toDTO(r , user));
        }
        return dtos;
    }

}

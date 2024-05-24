package com.foodify.Utils;

import com.foodify.dto.restaurant.RestaurantDto;
import com.foodify.entity.Restaurant;

public class RestaurantDtoUtil {

    public static RestaurantDto createRestaurantDto(Restaurant restaurant){
        return RestaurantDto
                .builder()
                .description(restaurant.getDescription())
                .images(restaurant.getImages())
                .title(restaurant.getName())
                .id(restaurant.getId())
                .build();
    }

}

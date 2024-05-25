package com.foodify.Utils.restaurant;

import com.foodify.dto.restaurant.RestaurantDto;
import com.foodify.entity.Restaurant;

import java.util.function.Function;

public class RestaurantDtoUtil {

    public static Function<Restaurant , RestaurantDto> createRestaurantDto = restaurant ->
            RestaurantDto
                    .builder()
                    .description(restaurant.getDescription())
                    .images(restaurant.getImages())
                    .title(restaurant.getName())
                    .id(restaurant.getId())
                    .build();

}

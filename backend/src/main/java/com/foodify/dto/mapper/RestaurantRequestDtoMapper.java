package com.foodify.dto.mapper;

import com.foodify.dto.RestaurantRequestDto;
import com.foodify.entity.Restaurant;
import org.springframework.stereotype.Component;

@Component
public class RestaurantRequestDtoMapper {

    public RestaurantRequestDto toDto(Restaurant restaurant){
        return RestaurantRequestDto.builder()
                .id(restaurant.getId())
                .name(restaurant.getName())
                .description(restaurant.getDescription())
                .cuisineType(restaurant.getCuisineType())
                .address(restaurant.getAddress())
                .contactInformation(restaurant.getContactInformation())
                .openingHours(restaurant.getOpeningHours())
                .images(restaurant.getImages())
                .build();
    }

    public Restaurant toEntity(RestaurantRequestDto dto) {
        return Restaurant
                .builder()
                .id(dto.getId())
                .name(dto.getName())
                .description(dto.getDescription())
                .cuisineType(dto.getCuisineType())
                .openingHours(dto.getOpeningHours())
                .address(dto.getAddress())
                .contactInformation(dto.getContactInformation())
                .images(dto.getImages())
                .build();
    }

}

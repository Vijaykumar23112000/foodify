package com.foodify.dto;

import com.foodify.domain.ContactInformation;
import com.foodify.entity.Address;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Builder
public class RestaurantRequestDto { // CreateRestaurantRequest

    private Long id;
    private String name;
    private String description;
    private String cuisineType;
    private Address address;
    private ContactInformation contactInformation;
    private String openingHours;
    private List<String> images;

}

package com.foodify.dto.food;

import com.foodify.dto.ingredient.IngredientsItemResponseDto;
import com.foodify.dto.restaurant.RestaurantResponseDto;
import com.foodify.entity.Category;
import lombok.*;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FoodResponseDto {

    private Long id;
    private String name;
    private String description;
    private Long price;
    private Category category;
    private List<String> images;
    private RestaurantResponseDto restaurant;
    private List<IngredientsItemResponseDto> ingredients;
    private Date creationDate;
    private Boolean isSeasonal;
    private Boolean isVegetarian;
    private Boolean isAvailable;

}

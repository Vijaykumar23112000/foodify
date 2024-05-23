package com.foodify.dto;

import com.foodify.entity.Category;
import com.foodify.entity.IngredientsItem;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class FoodRequestDto {

    private String name;
    private String description;
    private Long price;
    private Category category;
    private List<String> images;
    private Long restaurantId;
    private Boolean isVegetarian;
    private Boolean isSeasonable;
    private List<IngredientsItem> ingredients;

}

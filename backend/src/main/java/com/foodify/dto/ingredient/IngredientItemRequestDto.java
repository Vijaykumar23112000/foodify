package com.foodify.dto.ingredient;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class IngredientItemRequestDto {
    private String name;
    private Long categoryId;
    private Long restaurantId;

}

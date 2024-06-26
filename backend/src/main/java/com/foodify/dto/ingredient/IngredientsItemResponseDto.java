package com.foodify.dto.ingredient;

import com.foodify.entity.IngredientCategory;
import lombok.*;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class IngredientsItemResponseDto {

    private Long id;
    private String name;
    private IngredientCategory category;
    private Boolean isStock;

}

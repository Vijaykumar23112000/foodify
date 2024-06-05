package com.foodify.dto.ingredient;

import com.foodify.entity.IngredientsItem;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class IngredientCategoryResponseDto {

    private Long id;
    private String name;
//    private List<IngredientsItem> ingredients;

}

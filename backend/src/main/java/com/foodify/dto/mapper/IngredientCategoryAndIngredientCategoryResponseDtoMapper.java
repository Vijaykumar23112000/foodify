package com.foodify.dto.mapper;

import com.foodify.dto.ingredient.IngredientCategoryResponseDto;
import com.foodify.entity.IngredientCategory;

import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class IngredientCategoryAndIngredientCategoryResponseDtoMapper {

    public Function<IngredientCategory , IngredientCategoryResponseDto> toDTO = category ->
            IngredientCategoryResponseDto
                .builder()
                .id(category.getId())
                .name(category.getName())
                .build();

}

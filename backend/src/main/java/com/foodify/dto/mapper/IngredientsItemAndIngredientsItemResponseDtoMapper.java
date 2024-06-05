package com.foodify.dto.mapper;

import com.foodify.dto.ingredient.IngredientsItemResponseDto;
import com.foodify.entity.IngredientsItem;
import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class IngredientsItemAndIngredientsItemResponseDtoMapper {

    public Function<IngredientsItem , IngredientsItemResponseDto> toDTO = item ->
           IngredientsItemResponseDto
                  .builder()
                  .id(item.getId())
                  .name(item.getName())
                  .category(item.getCategory())
                  .isStock(item.getIsStock())
                  .build();

}

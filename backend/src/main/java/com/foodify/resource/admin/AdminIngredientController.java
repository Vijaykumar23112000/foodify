package com.foodify.resource.admin;

import com.foodify.dto.ingredient.IngredientCategoryRequestDto;
import com.foodify.dto.ingredient.IngredientItemRequestDto;
import com.foodify.entity.IngredientCategory;
import com.foodify.entity.IngredientsItem;
import com.foodify.service.impl.IngredientsServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/admin/ingredients")
public class AdminIngredientController {

    private final IngredientsServiceImpl ingredientsService;

    @PostMapping("/category")
    public ResponseEntity<IngredientCategory> createIngredientCategory(
            @RequestBody IngredientCategoryRequestDto request,
            @RequestHeader("Authorization") String token) throws Exception
    {

        var ingredientCategory = ingredientsService.createIngredientCategory(request.getName() , request.getRestaurantId());
        return ResponseEntity.status(HttpStatus.CREATED).body(ingredientCategory);

    }

    @PostMapping
    public ResponseEntity<IngredientsItem> createIngredientItem(
            @RequestBody IngredientItemRequestDto request,
            @RequestHeader("Authorization") String token) throws Exception
    {

        var ingredientsItem = ingredientsService.createIngredientItem(request.getRestaurantId(), request.getName(), request.getCategoryId());
        return ResponseEntity.status(HttpStatus.CREATED).body(ingredientsItem);

    }

    @PutMapping("/{id}/stock")
    public ResponseEntity<IngredientsItem> updateIngredientsStock(
            @PathVariable Long id,
            @RequestHeader("Authorization") String token) throws Exception
    {

        var ingredientsItem = ingredientsService.updateStock(id);
        return ResponseEntity.status(HttpStatus.OK).body(ingredientsItem);

    }

    @GetMapping("/restaurant/{id}")
    public ResponseEntity<List<IngredientsItem>> getRestaurantIngredientsItem(
            @PathVariable Long id,
            @RequestHeader("Authorization") String token) throws Exception
    {

        var ingredientsItems = ingredientsService.findRestaurantIngredients(id);
        return ResponseEntity.status(HttpStatus.OK).body(ingredientsItems);

    }

    @GetMapping("/restaurant/{id}/category")
    public ResponseEntity<List<IngredientCategory>> getRestaurantIngredientCategory(
            @PathVariable Long id,
            @RequestHeader("Authorization") String token) throws Exception
    {

        var ingredientCategories = ingredientsService.findIngredientCategoryByRestaurantId(id);
        return ResponseEntity.status(HttpStatus.OK).body(ingredientCategories);

    }

}

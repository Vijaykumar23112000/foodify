package com.foodify.resource.user;


import com.foodify.dto.mapper.UserAndUserResponseDtoMapper;
import com.foodify.entity.Category;
import com.foodify.service.impl.CategoryServiceImpl;
import com.foodify.service.impl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/category")
public class CategoryController {

    private final CategoryServiceImpl categoryService;
    private final UserServiceImpl userService;
    private final UserAndUserResponseDtoMapper userMapper;

    @GetMapping("/restaurant/{id}")
    public ResponseEntity<List<Category>> getRestaurantsCategory(
            @PathVariable Long id,
            @RequestHeader("Authorization") String token) throws Exception
    {

//        var user = userMapper.toENTITY.apply(userService.findUserByJwtToken(token.substring(7).trim()));
        var categories = categoryService.findCategoryByRestaurantId(id);
        return ResponseEntity.status(HttpStatus.OK).body(categories);

    }

}

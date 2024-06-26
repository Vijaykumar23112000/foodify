package com.foodify.resource.admin;

import com.foodify.dto.category.CategoryRequestDto;
import com.foodify.dto.mapper.UserAndUserResponseDtoMapper;
import com.foodify.entity.Category;
import com.foodify.service.impl.CategoryServiceImpl;
import com.foodify.service.impl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/admin/category")
public class AdminCategoryController {

    private final CategoryServiceImpl categoryService;
    private final UserServiceImpl userService;
    private final UserAndUserResponseDtoMapper userMapper;

    @PostMapping
    public ResponseEntity<Category> createCategory(
            @RequestBody CategoryRequestDto category ,
            @RequestHeader("Authorization") String token) throws Exception
    {

        var user = userMapper.toENTITY.apply(userService.findUserByJwtToken(token.substring(7).trim()));
        var createdCategory = categoryService.createCategory(category.getName(), user.getId());
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCategory);

    }

}
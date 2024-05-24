package com.foodify.resource.user;

import com.foodify.dto.user.UserResponseDto;
import com.foodify.service.impl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
public class UserController {

    private final UserServiceImpl userService;

    @GetMapping("/profile")
    public ResponseEntity<UserResponseDto> findByJwtToken(@RequestHeader("Authorization") String token )
    {

        return ResponseEntity.status(HttpStatus.OK).body(userService.findUserByJwtToken(token.substring(7).trim()));

    }

}
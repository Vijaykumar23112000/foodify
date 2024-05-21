package com.foodify.resource;

import com.foodify.entity.User;
import com.foodify.service.impl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
public class UserController {

    private final UserServiceImpl userService;

    @GetMapping("/profile")
    public ResponseEntity<User> findByJwtToken( @RequestHeader("Authorization") String token ) throws Exception {
        return ResponseEntity.ok(userService.findUserByJwtToken(token));
    }
}

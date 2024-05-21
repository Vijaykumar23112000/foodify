package com.foodify.resource;

import com.foodify.dto.UserDto;
import com.foodify.entity.User;
import com.foodify.response.AuthenticatoinResponse;
import com.foodify.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticatoinResponse> register(@RequestBody UserDto request){
        return ResponseEntity.ok(authenticationService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticatoinResponse> login(@RequestBody User request){
        return ResponseEntity.ok(authenticationService.login(request));
    }

}

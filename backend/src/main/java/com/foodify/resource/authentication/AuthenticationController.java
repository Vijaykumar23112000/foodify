package com.foodify.resource.authentication;

import com.foodify.dto.authentication.LoginRequestDto;
import com.foodify.dto.user.UserRequestDto;
import com.foodify.dto.authentication.AuthenticationResponse;
import com.foodify.service.impl.AuthenticationServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthenticationController {

    private final AuthenticationServiceImpl authenticationService;

    @PostMapping(value = "/signup", produces = "application/json")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody UserRequestDto request) throws Exception
    {

        return ResponseEntity.status(HttpStatus.CREATED).body(authenticationService.register(request));

    }

    @PostMapping("/signin")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody LoginRequestDto request)
    {

        return ResponseEntity.status(HttpStatus.OK).body(authenticationService.login(request));

    }

}

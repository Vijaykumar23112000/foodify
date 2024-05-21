package com.foodify.response;


public class AuthenticatoinResponse {

    private String token;

    public AuthenticatoinResponse(String token){
        this.token = token;
    }

    public String getToken(){
        return token;
    }
}

package com.foodify.Utils.user;

import com.foodify.dto.user.UserRequestDto;
import com.foodify.entity.User;

import java.util.function.Function;

public class UserUtils {

    public static Function<UserRequestDto , User> createUser = (request) ->
            User
                    .builder()
                    .fullName(request.getFullName())
                    .email(request.getEmail())
                    .role(request.getRole())
//                    /*.orders(null)
//                    .favorites(null)
//                    .addresses(null)*/
                    .build();

}

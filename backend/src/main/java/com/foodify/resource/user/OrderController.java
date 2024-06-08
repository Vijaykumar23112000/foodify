package com.foodify.resource.user;

import com.foodify.dto.mapper.UserAndUserResponseDtoMapper;
import com.foodify.dto.order.OrderRequestDto;
import com.foodify.entity.Order;
import com.foodify.service.impl.OrderServiceImpl;
import com.foodify.service.impl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class OrderController {

    private final OrderServiceImpl orderService;
    private final UserServiceImpl userService;
    private final UserAndUserResponseDtoMapper userMapper;


    @PostMapping("/order")
    public ResponseEntity<Order> createOrder(
            @RequestBody OrderRequestDto request ,
            @RequestHeader("Authorization") String token ) throws Exception
    {

        var user = userMapper.toENTITY.apply(userService.findUserByJwtToken(token.substring(7).trim()));
        var paymentResponseDto = orderService.createOrder(request , user);
        return ResponseEntity.status(HttpStatus.CREATED).body(paymentResponseDto);

    }

    @GetMapping("/order/user")
    public ResponseEntity<List<Order>> getOrderHistory(
            @RequestHeader("Authorization") String token ) throws Exception
    {

        var user = userMapper.toENTITY.apply(userService.findUserByJwtToken(token.substring(7).trim()));
        var orders = orderService.getUsersOrder(user.getId());
        return ResponseEntity.status(HttpStatus.OK).body(orders);

    }

}

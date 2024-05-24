package com.foodify.resource.admin;

import com.foodify.dto.mapper.UserAndUserResponseDtoMapper;
import com.foodify.entity.Order;
import com.foodify.service.impl.OrderServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/admin")
public class AdminOrderController {


    private final OrderServiceImpl orderService;
    private final UserAndUserResponseDtoMapper userMapper;

    @GetMapping("/order/restaurant/{id}")
    public ResponseEntity<List<Order>> getOrderHistoryForRestaurant(
            @PathVariable Long id,
            @RequestParam(required = false) String orderStatus,
            @RequestHeader("Authorization") String token ) throws Exception
    {

        List<Order> orders = orderService.getRestaurantsOrder(id , orderStatus);
        return ResponseEntity.status(HttpStatus.OK).body(orders);

    }

    @PutMapping("/order/{orderId/{orderStatus}}")
    public ResponseEntity<Order> updateOrderStatus(
            @PathVariable Long orderId,
            @PathVariable String orderStatus,
            @RequestHeader("Authorization") String token ) throws Exception
    {

        Order order = orderService.updateOrder(orderId,orderStatus);
        return ResponseEntity.status(HttpStatus.OK).body(order);

    }

}

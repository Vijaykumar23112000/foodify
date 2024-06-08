package com.foodify.resource.user;

import com.foodify.dto.payment.PaymentLinkResponse;
import com.foodify.service.impl.PaymentServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentServiceImpl paymentService;

    @PostMapping("/payments/{orderId}")
    public ResponseEntity<PaymentLinkResponse> createPaymentLink(
            @PathVariable Long orderId,
            @RequestHeader("Authorization") String token ) throws Exception {

        PaymentLinkResponse res = paymentService.createPayment(orderId);
        return ResponseEntity.status(HttpStatus.CREATED).body(res);

    }

}

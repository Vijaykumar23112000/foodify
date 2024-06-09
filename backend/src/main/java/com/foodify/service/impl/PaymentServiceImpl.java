package com.foodify.service.impl;

import com.foodify.dto.payment.PaymentLinkResponse;
import com.foodify.entity.Order;
import com.foodify.service.PaymentService;
import com.razorpay.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService{

    @Value("${razorpay.api.test.key_id}")
    private String RZP_KEY_ID;

    @Value("${razorpay.api.test.key_secret}")
    private String RZP_KEY_SECRET;

    @Override
    public PaymentLinkResponse createPayment(Order order) throws Exception {
        RazorpayClient razorpayClient = new RazorpayClient(RZP_KEY_ID, RZP_KEY_SECRET);
        JSONObject paymentLinkRequest = new JSONObject();
        paymentLinkRequest.put("amount", order.getTotalPrice() * 100);
        paymentLinkRequest.put("currency", "INR");

        paymentLinkRequest.put("callback_url", "http://localhost:3000/payment/success/"+order.getId());
        paymentLinkRequest.put("callback_method", "get");

        PaymentLink payment = razorpayClient.paymentLink.create(paymentLinkRequest);
        return PaymentLinkResponse
                .builder()
                .paymentLinkId(payment.get("id"))
                .paymentLinkUrl(payment.get("short_url"))
                .build();
    }

}

package com.foodify.service.impl;

import com.foodify.dto.payment.PaymentLinkResponse;
import com.foodify.entity.Order;
import com.razorpay.PaymentLink;
import com.razorpay.RazorpayClient;
import lombok.RequiredArgsConstructor;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl {

    @Value("${razorpay.api.test.key_id}")
    private String RZP_KEY_ID;

    @Value("${razorpay.api.test.key_secret}")
    private String RZP_KEY_SECRET;

    private final OrderServiceImpl orderService;
    private final UserServiceImpl userService;

    public PaymentLinkResponse createPayment(Long orderId) throws Exception {
        Order order = orderService.findOrderById(orderId);
        RazorpayClient razorpayClient = new RazorpayClient(RZP_KEY_ID , RZP_KEY_SECRET);
        JSONObject paymentLinkRequest = new JSONObject();
        paymentLinkRequest.put("amount",order.getTotalPrice() * 100);
        paymentLinkRequest.put("currency","INR");

        JSONObject customer = new JSONObject();
        customer.put("name",order.getCustomer().getFullName());
        customer.put("email",order.getCustomer().getEmail());
        paymentLinkRequest.put("customer",customer);

        JSONObject notify = new JSONObject();
        notify.put("sms",true);
        notify.put("email",true);
        paymentLinkRequest.put("notify",notify);

        paymentLinkRequest.put("callback","http://localhost:3000/payment/"+orderId+"success");
        paymentLinkRequest.put("callback_method","get");

        PaymentLink payment = razorpayClient.paymentLink.create(paymentLinkRequest);
        String paymentLinkId = payment.get("id");
        String paymentLinkUrl = payment.get("short_url");

        PaymentLinkResponse res = new PaymentLinkResponse();
        res.setPaymentLinkId(paymentLinkId);
        res.setPaymentLinkUrl(paymentLinkUrl);
        return res;

    }

}

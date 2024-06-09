package com.foodify.service;

import com.foodify.dto.payment.PaymentLinkResponse;
import com.foodify.entity.Order;

public interface PaymentService {

    PaymentLinkResponse createPayment(Order order) throws Exception;

}

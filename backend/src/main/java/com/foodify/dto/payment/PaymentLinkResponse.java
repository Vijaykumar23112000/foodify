package com.foodify.dto.payment;


import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PaymentLinkResponse {

    private String paymentLinkUrl;
    private String paymentLinkId;

}
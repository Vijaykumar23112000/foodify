package com.foodify.dto.cart;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CartItemRequestDto {

    private Long foodId;
    private int quantity;
    private List<String> ingredients;

}

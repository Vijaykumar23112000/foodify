package com.foodify.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

import static jakarta.persistence.GenerationType.AUTO;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CartItem {

    @Id
    @GeneratedValue(strategy = AUTO)
    private Long id;

    private int quantity;
    private Long totalPrice;

    @JsonIgnore
    @ManyToOne
    private Cart cart;

    @ManyToOne
    private Food food;

    private List<String> ingredients;

}

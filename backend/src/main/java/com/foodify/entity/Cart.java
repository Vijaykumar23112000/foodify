package com.foodify.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

import static jakarta.persistence.CascadeType.*;
import static jakarta.persistence.GenerationType.AUTO;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Cart {

    @Id
    @GeneratedValue(strategy = AUTO)
    private Long id;

    private Long total;

    @OneToOne
    private User customer;

    @OneToMany(mappedBy = "cart" , cascade = ALL , orphanRemoval = true)
    private List<CartItem> item = new ArrayList<>();

}
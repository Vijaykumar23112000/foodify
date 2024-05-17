package com.foodify.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.foodify.dto.RestaurantDto;
import com.foodify.enumeration.USER_ROLE;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

import static jakarta.persistence.CascadeType.ALL;
import static jakarta.persistence.GenerationType.AUTO;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="\"user\"")
public class User {

    @Id
    @GeneratedValue(strategy = AUTO)
    private Long id;

    private String fullName;
    private String email;
    private String password;
    private USER_ROLE role;

    @JsonIgnore
    @OneToMany(cascade = ALL , mappedBy = "customer")
    private List<Order> orders = new ArrayList<>();

    @ElementCollection
    private List<RestaurantDto> favorites = new ArrayList<>();

    @OneToMany(cascade = ALL , orphanRemoval = true)
    private List<Address> addresses = new ArrayList<>();

}
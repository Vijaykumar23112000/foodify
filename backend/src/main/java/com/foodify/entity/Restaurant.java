package com.foodify.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.foodify.domain.ContactInformation;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static jakarta.persistence.CascadeType.ALL;
import static jakarta.persistence.GenerationType.AUTO;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Restaurant {

    @Id
    @GeneratedValue(strategy = AUTO)
    private Long id;

    private String name;
    private String description;
    private String cuisineType;
    private String openingHours;
    private LocalDateTime registrationDate;
    private Boolean open;

    @OneToOne
    private Address address;

    @Embedded
    private ContactInformation contactInformation;

    @OneToOne
    private User owner;

    @JsonIgnore
    @OneToMany(mappedBy = "restaurant" , cascade = ALL , orphanRemoval = true)
    private List<Order> orders = new ArrayList<>();

    @ElementCollection
    @Column(length = 1000)
    private List<String> images;

    @JsonIgnore
    @OneToMany(mappedBy = "restaurant" , cascade = ALL)
    private List<Food> foods = new ArrayList<>();

}
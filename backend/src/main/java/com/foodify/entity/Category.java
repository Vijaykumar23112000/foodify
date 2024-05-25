package com.foodify.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.*;

import static jakarta.persistence.GenerationType.AUTO;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Category {

    @Id
    @GeneratedValue(strategy = AUTO)
    private Long id;

    private String name;

    @ManyToOne
    @JsonIgnore
    private Restaurant restaurant;

}
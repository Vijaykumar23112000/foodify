package com.foodify.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static jakarta.persistence.GenerationType.AUTO;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Food {

    @Id
    @GeneratedValue(strategy = AUTO)
    private Long id;

    private String name;
    private String description;
    private Long price;
    private boolean isVegetarian;
    private boolean isSeasonable;
    private boolean available;
    private Date creationDate;

    @ManyToOne
    private Category foodCategory;

    @Column(length = 1000)
    @ElementCollection
    private List<String> images;

    @ManyToOne
    private Restaurant restaurant;

    @ManyToMany
    private List<IngredientsItem> ingredients = new ArrayList<>();

}
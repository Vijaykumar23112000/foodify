package com.foodify.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static jakarta.persistence.GenerationType.AUTO;

@Entity
@Getter
@Setter
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
    private Boolean isVegetarian;
    private Boolean isSeasonable;
    private Boolean available;
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
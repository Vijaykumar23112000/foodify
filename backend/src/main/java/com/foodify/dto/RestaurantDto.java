package com.foodify.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Builder
@Embeddable
public class RestaurantDto {

    private Long id;

    private String title;

    @Column(length = 1000)
    private List<String> images;

    private String description;

}
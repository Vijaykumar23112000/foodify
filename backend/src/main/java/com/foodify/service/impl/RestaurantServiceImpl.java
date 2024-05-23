package com.foodify.service.impl;

import com.foodify.Utils.RestaurantDtoUtil;
import com.foodify.Utils.RestaurantUtil;
import com.foodify.dto.RestaurantDto;
import com.foodify.dto.RestaurantRequestDto;
import com.foodify.entity.Address;
import com.foodify.entity.Restaurant;
import com.foodify.entity.User;
import com.foodify.repository.AddressRepository;
import com.foodify.repository.RestaurantRepository;
import com.foodify.repository.UserRepository;
import com.foodify.service.RestaurantService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RestaurantServiceImpl implements RestaurantService {

    private final RestaurantRepository restaurantRepository;
    private final AddressRepository addressRepository;
    private final UserRepository userRepository;

    @Override
    public Restaurant createRestaurant(RestaurantRequestDto restaurantRequest, User userRequest) {
        Address address = addressRepository.save(restaurantRequest.getAddress());
        Restaurant restaurant = RestaurantUtil.createRestaurant(restaurantRequest , userRequest , address);
        return restaurantRepository.save(restaurant);
    }

    @Override
    public Restaurant updateRestaurant(Long restaurantId, RestaurantRequestDto updatedRestaurantRequest) throws Exception {
        Restaurant restaurant = findRestaurantById(restaurantId);
        if(restaurant.getCuisineType() != null) restaurant.setCuisineType(updatedRestaurantRequest.getCuisineType());
        if(restaurant.getDescription() != null) restaurant.setDescription(updatedRestaurantRequest.getDescription());
        if(restaurant.getName() != null) restaurant.setName(updatedRestaurantRequest.getName());
        return restaurantRepository.save(restaurant);
    }

    @Override
    public void deleteRestaurant(Long restaurantId) throws Exception {
        restaurantRepository.delete(findRestaurantById(restaurantId));
    }

    @Override
    public List<Restaurant> getAllRestaurant() {
        return restaurantRepository.findAll();
    }

    @Override
    public List<Restaurant> searchRestaurant(String keyword) {
        return restaurantRepository.findBySearchQuery(keyword);
    }

    @Override
    public Restaurant findRestaurantById(Long id) throws Exception {
        Optional<Restaurant> optionalRestaurant = restaurantRepository.findById(id);
        if(optionalRestaurant.isEmpty()) throw new Exception("Restaurant Not Found With Id : "+id);
        return optionalRestaurant.get();
    }

    @Override
    public Restaurant findRestaurantByUserId(Long userId) throws Exception {
        Restaurant restaurant = restaurantRepository.findByOwnerId(userId);
        if(restaurant == null) throw new Exception("Restaurant Not Found For The OwnerId : "+userId);
        return restaurant;
    }

    @Override
    public RestaurantDto addToFavorites(Long restaurantId, User user) throws Exception {
        Restaurant restaurant = findRestaurantById(restaurantId);
        RestaurantDto dto = RestaurantDtoUtil.createRestaurantDto(restaurant);
        boolean isFavorite = false;
        List<RestaurantDto> favorites = user.getFavorites();
        for(RestaurantDto fav: favorites){
            if(fav.getId().equals(restaurantId)){
                isFavorite = true;
                break;
            }
        }
        if(isFavorite) favorites.removeIf(favorite -> favorite.getId().equals(restaurantId));
        else favorites.add(dto);
        userRepository.save(user);
        return dto;
    }

    @Override
    public Restaurant updateRestaurantStatus(Long restaurantId) throws Exception {
        Restaurant restaurant = findRestaurantById(restaurantId);
        restaurant.setOpen(!restaurant.isOpen());
        return restaurantRepository.save(restaurant);
    }

}
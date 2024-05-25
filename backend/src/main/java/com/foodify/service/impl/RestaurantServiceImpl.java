package com.foodify.service.impl;

import com.foodify.Utils.restaurant.RestaurantUtil;
import com.foodify.dto.restaurant.RestaurantDto;
import com.foodify.dto.restaurant.RestaurantRequestDto;
import com.foodify.entity.Restaurant;
import com.foodify.entity.User;
import com.foodify.repository.Address.AddressRepository;
import com.foodify.repository.restaurant.RestaurantRepository;
import com.foodify.repository.user.UserRepository;
import com.foodify.service.RestaurantService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.foodify.Utils.restaurant.RestaurantDtoUtil.createRestaurantDto;

@Service
@RequiredArgsConstructor
public class RestaurantServiceImpl implements RestaurantService {

    private final RestaurantRepository restaurantRepository;
    private final AddressRepository addressRepository;
    private final UserRepository userRepository;

    @Override
    public Restaurant createRestaurant(RestaurantRequestDto restaurantRequest, User userRequest) {
        var address = addressRepository.save(restaurantRequest.getAddress());
        var restaurant = RestaurantUtil.createRestaurant.apply(restaurantRequest , userRequest , address);
        return restaurantRepository.save(restaurant);
    }

    @Override
    public Restaurant updateRestaurant(Long restaurantId, RestaurantRequestDto updatedRestaurantRequest) throws Exception {
        var restaurant = findRestaurantById(restaurantId);
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
        var optionalRestaurant = restaurantRepository.findById(id);
        if(optionalRestaurant.isEmpty()) throw new Exception("Restaurant Not Found With Id : "+id);
        return optionalRestaurant.get();
    }

    @Override
    public Restaurant findRestaurantByUserId(Long userId) throws Exception {
        var restaurant = restaurantRepository.findByOwnerId(userId);
        if(restaurant == null) throw new Exception("Restaurant Not Found For The OwnerId : "+userId);
        return restaurant;
    }

    @Override
    public RestaurantDto addToFavorites(Long restaurantId, User user) throws Exception {
        var restaurant = findRestaurantById(restaurantId);
        var restaurantDto = createRestaurantDto.apply(restaurant);
        var isFavorite = false;
        var favorites = user.getFavorites();
        for(RestaurantDto fav: favorites){
            if(fav.getId().equals(restaurantId)){
                isFavorite = true;
                break;
            }
        }
        if(isFavorite) favorites.removeIf(favorite -> favorite.getId().equals(restaurantId));
        else favorites.add(restaurantDto);
        userRepository.save(user);
        return restaurantDto;
    }

    @Override
    public Restaurant updateRestaurantStatus(Long restaurantId) throws Exception {
        var restaurant = findRestaurantById(restaurantId);
        restaurant.setOpen(!restaurant.getOpen());
        return restaurantRepository.save(restaurant);
    }

}

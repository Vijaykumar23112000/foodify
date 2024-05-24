package com.foodify.repository.Cart;

import com.foodify.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends JpaRepository<Cart , Long> {
    Cart findByCustomerId(Long userId);
}

package com.foodify.repository;

import com.foodify.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User , Long> {
    User findByEmail(String email);
}

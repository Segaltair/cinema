package com.surakin.cinema.repository;

import com.surakin.cinema.entity.User;
import org.springframework.data.repository.Repository;

import java.util.Optional;

public interface UserRepository extends Repository<User, Integer> {
    User findUserByUsernameAndPassword(String username, String password);

    Optional<User> findByUsernameOrEmail(String username, String email);

    Optional<User> findById(Integer id);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    User save(User user);
}

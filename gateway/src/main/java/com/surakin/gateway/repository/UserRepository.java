package com.surakin.gateway.repository;

import com.surakin.gateway.entity.User;
import org.springframework.data.repository.Repository;

import java.util.Optional;

public interface UserRepository extends Repository<User, Long> {
    User findUserByUsernameAndPassword(String username, String password);

    Optional<User> findByUsernameOrEmail(String username, String email);

    Optional<User> findById(Integer id);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    User save(User user);
}

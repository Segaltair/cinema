package com.surakin.cinema.repository;

import com.surakin.cinema.entity.User;
import org.springframework.data.repository.Repository;

public interface UserRepository extends Repository<User, Integer> {
    User findUserByLoginAndPassword(String login, String password);
}

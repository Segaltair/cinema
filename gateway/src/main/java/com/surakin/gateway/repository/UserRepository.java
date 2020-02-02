package com.surakin.gateway.repository;

import com.surakin.gateway.entity.User;
import org.springframework.data.repository.Repository;

import java.util.Optional;

/**
 * Репозиторий для сущности {@link User}
 *
 * @author Surakin Sergey created on 30.12.2019
 */
public interface UserRepository extends Repository<User, Long> {
    /**
     * Найти пользователя
     *
     * @param username логин
     * @param email почта
     * @return пользователь
     */
    Optional<User> findByUsernameOrEmail(String username, String email);

    /**
     * Найти пользователя по id
     *
     * @param id id пользователя
     * @return пользователь
     */
    Optional<User> findById(Integer id);

    /**
     * Найти пользователя по логину
     *
     * @param username логин
     * @return пользователь
     */
    Boolean existsByUsername(String username);

    /**
     * Найти пользователя по email
     *
     * @param email почта
     * @return пользователь
     */
    Boolean existsByEmail(String email);

    /**
     * Создать пользователя
     *
     * @param user пользователь
     * @return пользователь
     */
    User save(User user);
}

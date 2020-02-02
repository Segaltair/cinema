package com.surakin.gateway.repository;

import com.surakin.gateway.entity.Role;
import com.surakin.entity.RoleName;
import org.springframework.data.repository.Repository;

import java.util.Optional;

/**
 * Репозиторий для сущности {@link Role}
 *
 * @author Surakin Sergey created on 09.01.2020
 */
public interface RoleRepository extends Repository<Role, Long> {
    /**
     * Найти роль
     *
     * @param name название роли
     * @return роль
     */
    Optional<Role> findByName(RoleName name);
}

package com.surakin.cinema.repository;

import com.surakin.cinema.entity.Role;
import com.surakin.cinema.entity.RoleName;
import org.springframework.data.repository.Repository;

import java.util.Optional;

public interface RoleRepository extends Repository<Role, Long> {
    Optional<Role> findByName(RoleName name);
}

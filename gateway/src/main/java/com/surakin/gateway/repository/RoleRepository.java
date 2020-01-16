package com.surakin.gateway.repository;

import com.surakin.gateway.entity.Role;
import com.surakin.entity.RoleName;
import org.springframework.data.repository.Repository;

import java.util.Optional;

public interface RoleRepository extends Repository<Role, Long> {
    Optional<Role> findByName(RoleName name);
}

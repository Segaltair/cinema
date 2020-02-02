package com.surakin.entity;

/**
 * Список ролей
 *
 * @author Surakin Sergey created on 09.01.2020
 */
public enum RoleName {
    ROLE_ADMIN(Names.ADMIN),
    ROLE_USER(Names.USER);

    public static class Names {
        public static final String ADMIN = "ROLE_ADMIN";
        public static final String USER = "ROLE_USER";
    }

    private final String name;

    RoleName(String name) {
        this.name = name;
    }

    public String toString() {
        return this.name;
    }
}

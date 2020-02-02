package com.surakin.gateway.payload;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

/**
 * Запрос на аутентификацию
 *
 * @author Surakin Sergey created on 30.12.2019
 */
@Getter
@Setter
public class LoginRequest {
    /** Логин или email */
    @NotBlank
    private String usernameOrEmail;

    /** Пароль */
    @NotBlank
    private String password;
}

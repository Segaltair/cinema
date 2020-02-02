package com.surakin.gateway.payload;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

/**
 * Запрос на регистрацию
 *
 * @author Surakin Sergey created on 30.12.2019
 */
@Getter
@Setter
public class SignUpRequest {
    /** Логин */
    @NotBlank
    @Size(min = 3, max = 15)
    private String username;

    /** Email */
    @NotBlank
    @Size(max = 40)
    @Email
    private String email;

    /** Пароль */
    @NotBlank
    @Size(min = 4, max = 20)
    private String password;
}


package com.surakin.gateway.payload;

import lombok.Getter;
import lombok.Setter;

/**
 * Ответ на аутентификацию
 *
 * @author Surakin Sergey created on 30.12.2019
 */
@Getter
@Setter
public class JwtAuthenticationResponse {
    /** Токен */
    private String accessToken;

    /** Тип токена */
    private String tokenType = "Bearer";

    public JwtAuthenticationResponse(String accessToken) {
        this.accessToken = accessToken;
    }
}

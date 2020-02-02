package com.surakin.gateway.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

/**
 * Ответ на регистрацию
 *
 * @author Surakin Sergey created on 30.12.2019
 */
@AllArgsConstructor
@Getter
@Setter
public class ApiResponse {
    /** Статус */
    private Boolean success;

    /** Сообщение */
    private String message;
}

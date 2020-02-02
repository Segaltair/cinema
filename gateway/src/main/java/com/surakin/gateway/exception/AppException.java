package com.surakin.gateway.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Ошибки 400
 *
 * @author Surakin Sergey created on 09.01.2020
 */
@ResponseStatus(HttpStatus.BAD_REQUEST)
public class AppException extends RuntimeException {
    public AppException(String message) {
        super(message);
    }
}

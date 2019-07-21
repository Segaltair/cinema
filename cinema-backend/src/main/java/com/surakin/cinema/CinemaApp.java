package com.surakin.cinema;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.surakin.cinema")
@EntityScan(basePackages = "com.surakin.cinema.entity")
public class CinemaApp {

    public static void main(String[] args) {
        SpringApplication.run(CinemaApp.class, args);
    }
}

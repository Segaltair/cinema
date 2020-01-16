package com.surakin.cinema;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class CinemaApp {

    public static void main(String[] args) {
        SpringApplication.run(CinemaApp.class, args);
    }
}

package com.surakin.cinema.controller;

import com.surakin.cinema.entity.User;
import com.surakin.cinema.repository.UserRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

@RestController
public class UserController {

    private UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping(value = "/login")
    public User authenticate(@RequestBody User user, HttpServletResponse response) {
        if (userRepository.findUserByLoginAndPassword(user.getLogin(), user.getPassword()) != null) {
            response.addHeader("Access-Control-Allow-Origin", "http://localhost:3000");//todo move to advice
            return user;
        }
        else {
            return null;
        }
    }
}

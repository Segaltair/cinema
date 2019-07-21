package com.surakin.cinema.controller;

import com.surakin.cinema.entity.Movie;
import com.surakin.cinema.entity.MovieGenre;
import com.surakin.cinema.repository.GenreRepository;
import com.surakin.cinema.repository.MovieRepository;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Optional;

@RestController
@Log
public class CinemaController {

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private GenreRepository genreRepository;

    @GetMapping(value = "/movie")
    public List<Movie> getMovies(HttpServletResponse response) {
        response.addHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        return movieRepository.findAll();
    }

    @GetMapping(value = "/genre")
    public List<MovieGenre> getGenries(HttpServletResponse response) {
        response.addHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        return genreRepository.findAll();
    }

    @DeleteMapping(value = "/movie/{id}")
    public void deleteMovie(@PathVariable Integer id, HttpServletResponse response) {
        response.addHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        Optional<Movie> movie = movieRepository.findById(id);
        movieRepository.delete(movie.get());
    }
}

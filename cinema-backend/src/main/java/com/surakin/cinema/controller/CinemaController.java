package com.surakin.cinema.controller;

import com.surakin.cinema.entity.Movie;
import com.surakin.cinema.entity.MovieGenre;
import com.surakin.cinema.repository.GenreRepository;
import com.surakin.cinema.repository.MovieRepository;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping(value = "/movie/{id}")
    public ResponseEntity getMovie(@PathVariable Integer id, HttpServletResponse response) {
        Optional<Movie> movie = movieRepository.findById(id);
        response.addHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        return movie
                .map(movie1 -> new ResponseEntity<>(movie1, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping(value = "/genre")
    public List<MovieGenre> getGenres(HttpServletResponse response) {
        response.addHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        return genreRepository.findAll();
    }

    @PostMapping(value = "/movie")
    public Movie saveMovie(@RequestBody Movie movie, HttpServletResponse response) {
        response.addHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        return movieRepository.save(movie);
    }

    @DeleteMapping(value = "/movie/{id}")
    public void deleteMovie(@PathVariable Integer id, HttpServletResponse response) {
        response.addHeader("Access-Control-Allow-Origin", "http://localhost:3000/movie");
        Optional<Movie> movie = movieRepository.findById(id);
        movieRepository.delete(movie.get());
    }
}

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
    public List<Movie> getMovies() {
        return movieRepository.findAll();
    }

    @GetMapping(value = "/movie/{id}")
    public ResponseEntity getMovie(@PathVariable Integer id) {
        Optional<Movie> movie = movieRepository.findById(id);

        return movie
                .map(movie1 -> new ResponseEntity<>(movie1, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping(value = "/genre")
    public List<MovieGenre> getGenres() {
        return genreRepository.findAll();
    }

    @DeleteMapping(value = "/movie/{id}")
    public void deleteMovie(@PathVariable Integer id) {
        Optional<Movie> movie = movieRepository.findById(id);
        movieRepository.delete(movie.get());
    }
}

package com.surakin.cinema.controller;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import com.surakin.cinema.entity.Movie;
import com.surakin.cinema.entity.MovieGenre;
import com.surakin.entity.RoleName;
import com.surakin.cinema.repository.GenreRepository;
import com.surakin.cinema.repository.MovieRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController("/cinema")
public class CinemaController {

    private final MovieRepository movieRepository;
    private final GenreRepository genreRepository;

    public CinemaController(MovieRepository movieRepository, GenreRepository genreRepository) {
        this.movieRepository = movieRepository;
        this.genreRepository = genreRepository;
    }

    @GetMapping(value = "/movie")
    @HystrixCommand(fallbackMethod = "recommendationFallback")
    public List<Movie> getMovies() {
        return movieRepository.findAll();
    }

    public List<Movie> recommendationFallback() {
        return new ArrayList<>();
    }

    @GetMapping(value = "/movie/{id}")
    public ResponseEntity getMovie(@PathVariable Long id) {
        Optional<Movie> movie = movieRepository.findById(id);
        return movie
                .map(movie1 -> new ResponseEntity<>(movie1, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping(value = "/genre")
    public List<MovieGenre> getGenres() {
        return genreRepository.findAll();
    }

    @PostMapping(value = "/movie")
    @Secured(RoleName.Names.ADMIN)
    public Movie saveMovie(@RequestBody Movie movie) {
        return movieRepository.save(movie);
    }

    @DeleteMapping(value = "/movie/{id}")
    @Secured(RoleName.Names.ADMIN)
    public void deleteMovie(@PathVariable Long id) {
        Optional<Movie> movie = movieRepository.findById(id);
        if (movie.isPresent()) {
            movieRepository.delete(movie.get());
        } else {
            throw new RuntimeException("Movie not found " + id);
        }
    }
}

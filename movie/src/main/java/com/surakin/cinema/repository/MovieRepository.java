package com.surakin.cinema.repository;

import com.surakin.cinema.entity.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Long>  {
}

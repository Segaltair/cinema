package com.surakin.cinema.repository;

import com.surakin.cinema.entity.MovieGenre;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GenreRepository extends JpaRepository<MovieGenre, Integer> {
}

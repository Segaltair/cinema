package com.surakin.cinema.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class MovieGenre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    @JsonIgnore
    @OneToMany(
            fetch = FetchType.LAZY,
            mappedBy = "genre",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<Movie> movies = new ArrayList<>();
}

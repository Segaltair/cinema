package com.surakin.cinema.entity;


import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class MovieGenre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
}

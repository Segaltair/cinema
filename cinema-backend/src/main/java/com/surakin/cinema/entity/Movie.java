package com.surakin.cinema.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    @ManyToOne
    @JoinColumn(name = "genre_id", referencedColumnName = "id")
    private MovieGenre genre;
    private Integer numberInStock;
    @Column(name = "dailyRentalDate")
    private Double dailyRentalRate;
    private Date publishDate;
    private Boolean liked;

}

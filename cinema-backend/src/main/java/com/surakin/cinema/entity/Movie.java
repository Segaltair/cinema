package com.surakin.cinema.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    @ManyToOne
    @JoinColumn(name = "genre_id")
    private MovieGenre genre;
    private Integer numberInStock;
    @Column(name = "dailyRentalDate")
    private Double dailyRentalRate;
    private Date publishDate;
    private Boolean liked;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public MovieGenre getGenre() {
        return genre;
    }

    public void setGenre(MovieGenre genre) {
        this.genre = genre;
    }

    public Integer getNumberInStock() {
        return numberInStock;
    }

    public void setNumberInStock(Integer numberInStock) {
        this.numberInStock = numberInStock;
    }

    public Double getDailyRentalRate() {
        return dailyRentalRate;
    }

    public void setDailyRentalRate(Double dailyRentalRate) {
        this.dailyRentalRate = dailyRentalRate;
    }

    public Date getPublishDate() {
        return publishDate;
    }

    public void setPublishDate(Date publishDate) {
        this.publishDate = publishDate;
    }

    public Boolean getLiked() {
        return liked;
    }

    public void setLiked(Boolean liked) {
        this.liked = liked;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Movie )) return false;
        return id != null && id.equals(((Movie) o).getId());
    }

    @Override
    public int hashCode() {
        return 31;
    }
}

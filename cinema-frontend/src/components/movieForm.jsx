import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import {getGenres} from "../service/genreService";
import {getMovie, saveMovie} from "../service/movieService";

export default class MovieForm extends Form {
    state = {
        data: {
            title: "",
            genreId: "",
            numberInStock: "",
            dailyRentalRate: "",
        },
        genres: [],
        errors: []
    };

    schema = {
        id: Joi.number(),
        title: Joi.string().required().label("Title"),
        genreId: Joi.number().required().label("Genre"),
        numberInStock: Joi.number().required().min(0).max(100).label("Number in Stock"),
        dailyRentalRate: Joi.number().required().min(0).max(10).label("Daily Rental Rate")
    };

    async populateGenres() {
        const {data: genres} = await getGenres();
        this.setState({genres});
    };

    async populateMovies() {
        try {
            const movieId = this.props.match.params.id;
            if (movieId === "new") return;

            const {data: movie} = await getMovie(movieId);
            this.setState({data: this.mapToViewModel(movie)})
        } catch (e) {
            if (e.response && e.response.status === 404)
                this.props.history.replace("/not-found");
        }
    }

    async componentDidMount() {
        await this.populateGenres();
        await this.populateMovies();
    }

    render() {
        return (
            <div>
                <h1>Movie Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title", "Title")}
                    {this.renderSelect("genreId", "Genre", this.state.genres)}
                    {this.renderInput("numberInStock", "Number in Stock", "number")}
                    {this.renderInput("dailyRentalRate", "Rate")}
                    {this.renderButton("Save")}
                </form>
            </div>
        );
    }

    mapToViewModel(movie) {
        return {
            id: movie.id,
            title: movie.title,
            genreId: movie.genre.id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate
        }
    }

    doSubmit = async () => {
        const data = this.state.data;
        data.genre = this.state.genres.find(g => g.id === parseInt(data.genreId));
        await saveMovie(data);

        this.props.history.push("/movies")
    }
};
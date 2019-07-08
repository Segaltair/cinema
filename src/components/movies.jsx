import React, {Component} from 'react';
import ListGroup from "./common/listGroup"
import Pagination from "./common/pagination";
import * as MovieService from '../service/fakeMovieService';
import {getGenres} from "../service/fakeGenreService"
import {paginate} from "../utils/paginate"
import MovieTable from "./movieTable";

export default class Movies extends Component {
    state = {
        movies: [],
        pageSize: 4,
        currentPage: 1,
        genres: []
    };

    componentDidMount() {
        const genres = [{name: "All genres"}, ...getGenres()];
        this.setState({movies: MovieService.getMovies(), genres})
    }

    render() {
        const {pageSize, currentPage, movies: allMovies, selectedGenre} = this.state;

        const filtered = selectedGenre && selectedGenre._id
            ? allMovies.filter(movie => movie.genre._id === selectedGenre._id)
            : allMovies;

        const movies = paginate(filtered, currentPage, pageSize);

        if (allMovies.count === 0) return (<h1>There is no movies!</h1>);

        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup
                        items={this.state.genres}
                        onItemSelect={this.handleGenreSelect}
                        selectedGenre={this.state.selectedGenre}
                    />
                </div>
                <div className="col">
                    <h1>Showing {filtered.length} movies in the database</h1>
                    <MovieTable
                        movies={movies}
                        onDelete={this.handleDelete}
                        onLike={this.handleLike}
                    />
                    <Pagination
                        itemsCount={filtered.length}
                        pageSize={pageSize}
                        onPageChanged={this.handlePageChange}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        );
    };

    handleGenreSelect = genre => {
        this.setState({selectedGenre: genre, currentPage: 1})
    };

    handleLike = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movie[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies})
    };

    handleDelete = id => {
        const movies = this.state.movies.filter(m => m._id !== id);
        this.setState({movies: movies});
    };

    handlePageChange = (pageNumber) => {
        this.setState({currentPage: pageNumber});
    }
}

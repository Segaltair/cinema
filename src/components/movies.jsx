import React, {Component} from 'react';
import ListGroup from "./common/listGroup"
import Pagination from "./common/pagination";
import * as MovieService from '../service/fakeMovieService';
import {getGenres} from "../service/fakeGenreService"
import {paginate} from "../utils/paginate"
import MoviesTable from "./moviesTable";
import _ from "lodash";

export default class Movies extends Component {
    state = {
        movies: [],
        pageSize: 4,
        currentPage: 1,
        genres: [],
        sortColumn: {path: "title", order: "asc"}
    };

    componentDidMount() {
        const genres = [{_id: null, name: "All genres"}, ...getGenres()];
        this.setState({movies: MovieService.getMovies(), genres})
    }

    render() {
        const {
            pageSize,
            currentPage,
            movies: allMovies,
            selectedGenre,
            sortColumn
        } = this.state;

        const filtered = selectedGenre && selectedGenre._id
            ? allMovies.filter(movie => movie.genre._id === selectedGenre._id)
            : allMovies;

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const movies = paginate(sorted, currentPage, pageSize);

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
                    <MoviesTable
                        movies={movies}
                        onDelete={this.handleDelete}
                        onLike={this.handleLike}
                        onSort={this.handleSort}
                        sortColumn={sortColumn}
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

    handleSort = sortColumn => {
        this.setState({sortColumn})
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

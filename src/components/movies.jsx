import React, {Component} from 'react';
import ListGroup from "./common/listGroup"
import Pagination from "./common/pagination";
import * as MovieService from '../service/fakeMovieService';
import {getGenres} from "../service/fakeGenreService"
import {paginate} from "../utils/paginate"
import MoviesTable from "./moviesTable";
import {Link} from "react-router-dom";
import _ from "lodash";
import SearchBox from "./common/searchBox";

export default class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        searchQuery: "",
        selectedGenre: null,
        currentPage: 1,
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
            sortColumn,
            searchQuery
        } = this.state;

        const {totalCount, data: movies} = this.getPagedData();

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
                    <Link
                        to="/movies/new"
                        className="btn btn-primary"
                        style={{marginBottom: 20}}
                    >
                        New Movie
                    </Link>
                    <h1>Showing {totalCount} movies in the database</h1>
                    <SearchBox value={searchQuery} onChange={this.handleSearch}/>
                    <MoviesTable
                        movies={movies}
                        onDelete={this.handleDelete}
                        onLike={this.handleLike}
                        onSort={this.handleSort}
                        sortColumn={sortColumn}
                    />
                    <Pagination
                        itemsCount={totalCount}
                        pageSize={pageSize}
                        onPageChanged={this.handlePageChange}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        );
    };

    getPagedData = () => {
        const {
            pageSize,
            currentPage,
            movies: allMovies,
            selectedGenre,
            searchQuery,
            sortColumn
        } = this.state;

        let filtered = allMovies;
        if (searchQuery) {
            filtered = allMovies.filter(m =>
                m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
            )
        } else if (selectedGenre && selectedGenre._id) {
            filtered = allMovies.filter(movie => movie.genre._id === selectedGenre._id)
        }

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const movies = paginate(sorted, currentPage, pageSize);

        return {totalCount: filtered.length, data: movies}
    };

    handleSearch = query => {
        this.setState({searchQuery: query, selectedGenre: null, currentPage: 1})
    };

    handleSort = sortColumn => {
        this.setState({sortColumn})
    };

    handleGenreSelect = genre => {
        this.setState({selectedGenre: genre, seatchQuery: "", currentPage: 1})
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

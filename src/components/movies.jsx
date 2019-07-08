import React, {Component} from 'react';
import Like from "./common/like"
import Pagination from "./common/pagination";
import * as MovieService from '../service/fakeMovieService';
import {paginate} from "../utils/paginate"

export default class Movies extends Component {
    state = {
        movies: MovieService.getMovies(),
        pageSize: 4,
        currentPage: 1
    };

    render() {
        let {length: count} = this.state.movies;
        const {pageSize, currentPage, movies: allMovies} = this.state;
        if (count === 0)
            return (<h1>There is no movies!</h1>);

        const movies = paginate(allMovies, currentPage, pageSize);

        return (
            <React.Fragment>
                <h1>Showing {count} movies in the database</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {movies.map(movie => {
                        const {_id, title, genre, numberInStock, dailyRentalRate, liked} = movie;
                        return <tr key={_id}>
                            <td>{title}</td>
                            <td>{genre.name}</td>
                            <td>{numberInStock}</td>
                            <td>{dailyRentalRate}</td>
                            <td>
                                <Like
                                    liked={liked}
                                    onClick={() => this.handleLike(movie)}
                                />
                            </td>
                            <td>
                                <button className="btn btn-danger btn-sm" onClick={() => this.deleteMovie(_id)}>Delete
                                </button>
                            </td>
                        </tr>
                    })}
                    </tbody>
                </table>
                <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    onPageChanged={this.handlePageChange}
                    currentPage={currentPage}
                />
            </React.Fragment>
        );
    };

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movie[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies})
    };

    deleteMovie = (id) => {
        const movies = this.state.movies.filter(m => m._id !== id);
        this.setState({movies: movies});
    };

    handlePageChange = (pageNumber) => {
        this.setState({currentPage: pageNumber});
    }
}

import React, {Component} from 'react';
import * as MovieService from '../service/fakeMovieService';

export default class Poster extends Component {
    state = {
        movies: MovieService.getMovies()
    };

    render() {
        if (this.state.movies.length === 0)
            return (<h1>There is no movies!</h1>);

        return (
            <React.Fragment>
                <h1>Showing {this.state.movies.length} movies in the database</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.getRowsForMovies()}
                    </tbody>
                </table>
            </React.Fragment>
        );
    };

    getRowForMovie = (id) => {
        const {_id, title, genre, numberInStock, dailyRentalRate} = MovieService.getMovie(id);
        return <tr key={_id}>
            <td>{title}</td>
            <td>{genre.name}</td>
            <td>{numberInStock}</td>
            <td>{dailyRentalRate}</td>
            <td>
                <button className="btn btn-danger btn-sm" onClick={() => this.deleteMovie(_id)}>Delete</button>
            </td>
        </tr>;
    };

    getRowsForMovies = () => {
        let trMovies = [];

        this.state.movies.filter(movie => trMovies.push(this.getRowForMovie(movie._id)));

        return trMovies;
    };

    deleteMovie = (id) => {
        const movies = this.state.movies.filter(m => m._id !== id);
        this.setState({movies: movies});
    };
}

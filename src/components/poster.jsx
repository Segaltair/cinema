import React, {Component} from 'react';
import Like from "./common/like"
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
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.movies.map(movie => {
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
}

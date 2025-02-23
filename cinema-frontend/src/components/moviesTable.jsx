import React, {Component} from 'react';
import Like from "./common/like";
import Table from "./common/table";
import {Link} from "react-router-dom";

class MoviesTable extends Component {
    columns = [
        {
            name: "Title",
            path: "title",
            content: movie => <Link to={`/movies/${movie.id}`}>{movie.title}</Link>},
        {name: "Genre", path: "genre.name"},
        {name: "Stock", path: "numberInStock"},
        {name: "Rate", path: "dailyRentalRate"},
        {
            key: "like", content: movie => (<Like
                liked={movie.liked}
                onClick={() => this.props.onLike(movie)}
            />)
        },
        {
            key: "delete", content: movie => (<button className="btn btn-danger btn-sm"
                                                      onClick={() => this.props.onDelete(movie.id)}>Delete
            </button>)
        }
    ];

    render() {
        const {movies, sortColumn, onSort} = this.props;

        return (
            <Table
                columns={this.columns}
                data={movies}
                sortColumn={sortColumn}
                onSort={onSort}
            />
        )
    }
}

export default MoviesTable;
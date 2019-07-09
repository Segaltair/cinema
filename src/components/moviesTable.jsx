import React, {Component} from 'react';
import Like from "./common/like";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";

class MoviesTable extends Component {
    columns = [
        {name: "Title", path: "title"},
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
                                                      onClick={() => this.props.onDelete(movie._id)}>Delete
            </button>)
        }
    ];

    render() {
        const {movies, sortColumn, onSort} = this.props;

        return (
            <table className="table">
                <TableHeader
                    columns={this.columns}
                    sortColumn={sortColumn}
                    onSort={onSort}
                />
                <TableBody
                    columns={this.columns}
                    data={movies}
                />
            </table>
        )
    }
}

export default MoviesTable;
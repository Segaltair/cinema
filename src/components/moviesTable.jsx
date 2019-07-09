import React, {Component} from 'react';
import Like from "./common/like";
import TableHeader from "./common/tableHeader";

class MoviesTable extends Component {
    columns = [
        {name: "Title", sort: "title"},
        {name: "Genre", sort: "genre.name"},
        {name: "Stock", sort: "numberInStock"},
        {name: "Rate", sort: "dailyRentalRate"},
        {key: "like"},
        {key: "delete"}
    ];

    render() {
        const {movies, onDelete, onLike, sortColumn, onSort} = this.props;

        return (
            <table className="table">
                <TableHeader
                    columns={this.columns}
                    sortColumn={sortColumn}
                    onSort={onSort}
                />
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
                                onClick={() => onLike(movie)}
                            />
                        </td>
                        <td>
                            <button className="btn btn-danger btn-sm"
                                    onClick={() => onDelete(_id)}>Delete
                            </button>
                        </td>
                    </tr>
                })}
                </tbody>
            </table>
        )
    }
}

export default MoviesTable;
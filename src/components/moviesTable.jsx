import React, {Component} from 'react';
import Like from "./common/like";

class MoviesTable extends Component {
    raiseSort = path => {
        const sortColumn = {...this.props.sortColumn};
        if (sortColumn.path === path)
            sortColumn.order = (sortColumn.order === "asc") ? "desc" : "asc";
        else {
            sortColumn.path = path;
            sortColumn.order = "asc";
        }

        this.props.onSort(sortColumn);
    };

    render() {
        const {movies, onDelete, onLike} = this.props;

        return (
            <table className="table">
                <thead>
                <tr>
                    <th onClick={() => this.raiseSort("title")}>Title</th>
                    <th onClick={() => this.raiseSort("genre.name")}>Genre</th>
                    <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
                    <th onClick={() => this.raiseSort("dailyRentalRate")}>Rate</th>
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
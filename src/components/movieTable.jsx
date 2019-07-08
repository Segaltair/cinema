import React, {Component} from 'react';
import Like from "./common/like";

const MovieTable = props => {
    const {movies, onDelete, onLike} = props;

    return (
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
};

export default MovieTable;
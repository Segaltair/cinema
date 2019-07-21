import React from "react";

const ListGroup = ({items, textProperty, valueProperty, onItemSelect, selectedGenre}) => {
    return <ul className="list-group">
        {items.map(genre => (
            <li
                onClick={() => onItemSelect(genre)}
                key={genre[valueProperty]}
                className={ genre === selectedGenre ? "list-group-item active clickable" : "list-group-item clickable"}
            >
                {genre[textProperty]}
            </li>
        ))}
    </ul>;
};

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "id"
};

export default ListGroup;
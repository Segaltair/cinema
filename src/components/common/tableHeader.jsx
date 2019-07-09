import React, {Component} from "react"

//onSort
//column

export default class TableHeader extends Component {
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
        return (
            <thead>
            <tr>
                {this.props.columns.map(column => {
                    return <th key={column.name || column.key} onClick={() => this.raiseSort(column.sort)}>{column.name}</th>
                })}
            </tr>
            </thead>
        );
    }
}
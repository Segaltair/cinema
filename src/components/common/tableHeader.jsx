import React, {Component} from "react"
import "@fortawesome/fontawesome-free/css/v4-shims.css";

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
                {this.props.columns.map(column => (
                    <th
                        className="clickable"
                        key={column.name || column.key}
                        onClick={() => this.raiseSort(column.path)}
                    >
                        {column.name} {this.renderSortIcon(column)}
                    </th>
                ))}
            </tr>
            </thead>
        );
    }

    renderSortIcon = column => {
        const {sortColumn} = this.props;

        if (column.path !== sortColumn.path)
            return null;
        if (sortColumn.order === "asc")
            return <i className="fa fa-sort-asc"/>;
        return <i className="fa fa-sort-desc"/>
    }
}
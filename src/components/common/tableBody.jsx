import React, {Component} from "react"
import _ from "lodash"

export default class TableBody extends Component {
    render() {
        const {data, columns} = this.props;

        return (
            <tbody>
            {data.map(item => (
                <tr key={item.id}>
                    {columns.map(column => <td key={this.createKey(item, column)}>{this.renderCell(item, column)}</td>)}
                </tr>
            ))}
            </tbody>
        );
    }

    createKey = (item, column) => {
        return item.id + (column.path || column.key);
    };

    renderCell = (item, column) => {
        if (column.content)
            return column.content(item);
        return _.get(item, column.path)
    }
}
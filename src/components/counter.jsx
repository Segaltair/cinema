import React, {Component} from 'react';

export default class Counter extends Component {
    state = {
        count: 0,
        tags: ["1", "2", "3"]
    };

    handleIncrement = () => {
        console.log("handleIncrement count: " + this.state.count);
        this.setState({count: this.state.count + 1});
    };

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    className="btn btn-secondary btn-sm"
                    onClick={this.handleIncrement}
                >
                    Button
                </button>
                <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
            </div>
        );
    };

    getBadgeClasses() {
        let classes = "badge badge-";
        classes += this.state.count === 0 ? "warning" : "primary";

        return classes;
    };

    formatCount() {
        const {count} = this.state;
        console.log("formatCount count: " + count);
        return count === 0 ? <h1>Zero</h1> : count;
    }
}

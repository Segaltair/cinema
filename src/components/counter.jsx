import React, {Component} from 'react';

export default class Counter extends Component {
    state = {
        count : 0
    };

    render() {
        React.createElement('div');
        return (
            <React.Fragment>
                <h1>{this.formatCount()}</h1>
                <button>Button</button>
            </React.Fragment>
        );
    };

    formatCount() {
        const {count} = this.state;
        return count === 0 ? <h1>Zero</h1> : count;
    }
}

import React, { Component } from 'react';

class Solve extends Component {
    render() {
        return (
            <div>
                <div>{this.props.key}</div>
                <div>{this.props.solve.time}</div>
            </div>
        );
    }
}

export default Solve;
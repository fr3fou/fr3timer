import React, { Component } from 'react';
import Solve from './Solve.js';

class Solves extends Component {

    render() {
        return (
            <ul>
                <li>
                    {this.props.solves.map((solve, i) =>
                        <Solve key={i} solve={solve} />
                    )}
                </li>
            </ul>
        );
    }
}
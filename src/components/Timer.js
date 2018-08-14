import React, { Component } from 'react';

class Timer extends Component {
    render() {
        return (
            <div>
                <h3>timer: </h3>
                <button>start</button>
                <button>stop</button>
                <button>reset</button>
            </div>
        );
    }
}

export default Timer;
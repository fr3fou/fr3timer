import React, { Component } from 'react';
import '../assets/css/Timer.css';
import pretty from 'pretty-time';

class Timer extends Component {
    constructor(props) {
        super(props);

        // we need 2 timers, one to wait a few seconds while the spacebar is being held down
        // and one more for the actual solve
        this.state = {
            isStarted: false,
            time: 0,
            start: 0,
        }

        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.handleKeyPressed = this.handleKeyPressed.bind(this);
    }

    startTimer() {
        this.setState({
            isStarted: true,
            start: Date.now() - this.state.time,
        });
        this.timer = setInterval(() => {
            this.setState({
                time: Date.now() - this.state.start
            })
        }, 1);
    }

    stopTimer() {
        this.setState({
            isStarted: false,
        })
        clearInterval(this.timer);
    }

    resetTimer() {
        this.setState({ time: 0 })
    }

    handleKeyPressed(e) {
        if (e.keyCode === 32 && this.state.isStarted === false) {
            this.resetTimer();
            this.startTimer();
            this.props.isSolving();
        } else if (this.state.isStarted === true) {
            this.stopTimer();
            this.props.isSolving();
        }
    }

    componentDidMount() {
       window.addEventListener('keydown', this.handleKeyPressed);
        window.addEventListener('keyup', this.handleKeyUp);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyPressed);
        window.removeEventListener('keyup', this.handleKeyUp);
    }

    render() {
        return (
            <div className="Clock">
                <p>
                    {
                        pretty([0, this.state.time * 1000000], 's', Number(this.props.digits))
                    }
                </p>
            </div>
        );
    }
}

export default Timer;
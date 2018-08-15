import React, { Component } from 'react';
import '../assets/css/Timer.css';
import ms from 'pretty-ms';

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
            this.props.isWorking(this.state.isStarted);
        } else if (this.state.isStarted === true) {
            this.stopTimer();
            this.props.isWorking(this.state.isStarted);
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
            <div>
                <h3 className="Clock">{ms(this.state.time, {
                    keepDecimalsOnWholeSeconds: true,
                    secDecimalDigits: Number(this.props.digits),
                })}
                </h3>
            </div>
        );
    }
}

export default Timer;
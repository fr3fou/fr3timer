import React, { Component } from 'react';
import '../assets/css/Timer.css';
import pretty from 'pretty-time';
// important!!!
// https://stackoverflow.com/questions/48048957/react-long-press-event
// important!!!
class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isStarted: false,
            time: 0,
            start: 0,
        }

        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.handleButtonPress = this.handleButtonPress.bind(this);
        this.handleButtonRelease = this.handleButtonRelease.bind(this);
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

    handleTouchStart(e) {
        console.log('owo! its qt :3');
    }

    handleTouchEnd(e) {
        console.log('uwu! its qt :>');
    }

    handleButtonPress(e) {
        if (e.keyCode === 32 && this.state.isStarted === false) {
            this.resetTimer();
            this.startTimer();
            this.props.isSolving();
        } else if (this.state.isStarted === true) {
            this.stopTimer();
            this.props.isSolving();
        }
    }

    handleButtonRelease(e) {
        clearTimeout(this.isBeingHeldTimer);
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleButtonPress);
        window.addEventListener('keyup', this.handleButtonRelease);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleButtonPress);
        window.removeEventListener('keyup', this.handleButtonRelease);
    }

    render() {
        return (
            <div className="Clock" onTouchStart={this.handleTouchStart} onTouchEnd={this.handleTouchEnd} >
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
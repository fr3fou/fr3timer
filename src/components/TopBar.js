import React, { Component } from 'react';
import '../assets/css/TopBar.css';
import Scrambo from 'scrambo';

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scramble: ''
        }
        this.generateScramble();
    }

    generateScramble() {
        const scramble = new Scrambo().type(this.props.puzzleType).get(1);
        this.setState({ scramble });
    }

    render() {
        return (
            <div className='TopBarWrapper'>
                {this.state.puzzleType}
            </div>
        );
    }
}

export default TopBar;
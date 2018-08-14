import React, { Component } from 'react';
import '../assets/css/TopBar.css';

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            puzzleType: '3x3',
            scramble: ''
        }
    }
    
    generateScramble() {
        
    }
    
    render() {
        return (
            <div class='TopBarWrapper'>
                {this.state.puzzleType}
            </div>
        );
    }
}

export default TopBar;
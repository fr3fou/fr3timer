import React, { Component } from 'react';
import '../assets/css/TopBar.css';
import Scrambo from 'scrambo';
import Solve from '../models/solve';    
import Select from '@material-ui/core/Select';

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scramble: ''
        }
    }

    componentDidMount() {
        this.generateScramble();
    }

    generateScramble() {
        const scramble = new Scrambo().type(this.props.puzzleType).get(1);
        this.setState({ scramble });
    }

    render() {
        return (
            <div className='TopBarWrapper'>
                {this.props.puzzleType}
                <div className='TopBarScramble'>
                    {this.state.scramble}
                </div>
            </div>
        );
    }
}

export default TopBar;
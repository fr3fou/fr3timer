import React, { Component } from 'react';
import '../assets/css/TopBar.css';
import Scrambo from 'scrambo';
import Solve from '../models/solve';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            puzzleType: 333,
            scramble: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.generateScramble();
    }

    generateScramble() {
        const scramble = new Scrambo().type(this.state.puzzleType).get(1);
        this.setState({ scramble });
    }

    handleChange(e) {
        this.setState({
            puzzleType: e.target.value
        }, () => {
            this.generateScramble();
        })
    }

    render() {
        return (
            <div className='TopBarWrapper'>
                {this.state.puzzleType}
                <div className='TopBarScramble'>
                    {this.state.scramble}
                </div>
                <Select
                    value={this.state.puzzleType}
                    onChange={this.handleChange}
                >
                    <MenuItem value={222}>2x2x2</MenuItem>
                    <MenuItem value={333}>3x3x3</MenuItem>
                    <MenuItem value={444}>4x4x4</MenuItem>
                </Select>
            </div>
        );
    }
}

export default TopBar;
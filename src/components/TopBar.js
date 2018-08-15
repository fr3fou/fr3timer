import React, { Component } from 'react';
import '../assets/css/TopBar.css';
import Scrambo from 'scrambo';
// import Solve from '../models/solve';
import '../assets/css/cubing-icons.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            puzzleType: 333,
            puzzleName: '3x3x3',
            scramble: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    component

    componentDidMount() {
        this.generateScramble();
    }

    generateScramble() {
        const scramble = new Scrambo().type(this.state.puzzleType).get(1);
        this.setState({ scramble });
    }

    handleChange(e) {
        console.log(e);
        this.setState({
            puzzleName: e._targetInst.stateNode.innerText,
            puzzleType: e.target.value
        }, () => {
            this.generateScramble();
        });
    }

    render() {
        let visibleStyle = this.props.visible ? {display: 'block'} : {display: 'none'};
        console.log(visibleStyle);
        let iconName = `cubing-icon event-${this.state.puzzleType}`;
        return (
            <div className='TopBarWrapper' style={visibleStyle}>
                <span className={iconName}></span>
                <br />
                {this.state.puzzleName}
                <div className='TopBarScramble'>
                    {this.state.scramble}
                </div>
                <div>
                    <Select
                        value={this.state.puzzleType}
                        onChange={this.handleChange}
                        inputProps={{
                            id: 'puzzleTypeSelect',
                        }}
                    >
                        <MenuItem value={222}>2x2x2</MenuItem>
                        <MenuItem value={333}>3x3x3</MenuItem>
                        <MenuItem value={444}>4x4x4</MenuItem>
                    </Select>
                </div>
            </div>
        );
    }
}

export default TopBar;
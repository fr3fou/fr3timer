import React, { Component } from 'react';
import '../assets/css/TopBar.css';
import Scrambo from 'scrambo';
import { Spring } from 'react-spring'
// import Solve from '../models/solve';
import '../assets/css/cubing-icons.css';

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

    componentDidMount() {
        this.generateScramble();
    }

    componentDidUpdate(prevProps) {
        if (this.props.isSolving !== prevProps.isSolving) {
            if (this.props.isSolving) {
                this.generateScramble();
            }
        }
    }

    generateScramble() {
        const scramble = new Scrambo().type(this.state.puzzleType).get(1);
        this.setState({ scramble });
    }

    handleChange(e) {
        // console.log(e);
        // this.setState({
        //     puzzleName: e._targetInst.stateNode.innerText,
        //     puzzleType: e.target.value
        // }, () => {
        //     this.generateScramble();
        // });
    }

    render() {
        let visible = this.props.isSolving;
        let iconName = `cubing-icon event-${this.state.puzzleType}`;
        return (
            <Spring
                from={{ height: 0 }}
                force to={{ height: visible && this.state.scramble !== "" ? 'auto' : 0 }}>
                {styles =>
                    <div className='TopBarWrapper' style={styles}>
                        <div className='TopBarInner'>
                            <span className={iconName}></span>
                            <br />
                            {this.state.puzzleName}
                            <div className='TopBarScramble'>
                                {this.state.scramble}
                            </div>
                        </div>
                    </div>
                }
            </Spring>
        );
    }
}

export default TopBar;
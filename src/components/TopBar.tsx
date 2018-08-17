import * as React from 'react';
import { Spring } from 'react-spring'
import * as Scrambo from 'scrambo';
import '../assets/css/cubing-icons.css';
import '../assets/css/TopBar.css';
// import Solve from '../models/solve';

class TopBar extends React.Component<any, any> {
    constructor(props: {}) {
        super(props);
        this.state = {
            prevScramble: '',
            puzzleName: '3x3x3',
            puzzleType: 333,
            scramble: ''
        }
    }

    componentDidMount() {
        this.generateScramble();
    }

    componentDidUpdate(prevProps: any) {
        if (this.props.isSolving !== prevProps.isSolving) {
            if (this.props.isSolving) {
                this.setState({
                    prevScramble: this.state.scramble
                },
                    () => this.generateScramble())
            }
        }
    }

    generateScramble() {
        const scramble = new Scrambo().type(this.state.puzzleType).get(1);
        this.setState({ scramble });
    }

    render() {
        const visible = this.props.isSolving;
        const iconName = `cubing-icon event-${this.state.puzzleType}`;
        return (
            <Spring
                from={{ height: 0 }}
                force to={{ height: visible && this.state.scramble !== "" ? 'auto' : 0 }}>
                {styles =>
                    <div className='TopBarWrapper' style={styles}>
                        <div className='TopBarInner'>
                            <span className={iconName} />
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
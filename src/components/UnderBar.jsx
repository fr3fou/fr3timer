import React, { Component } from 'react';
import '../assets/css/UnderBar.css';
import { Spring } from 'react-spring';

class UnderBar extends Component {
    render() {
        let visible = this.props.isSolving;
        return (
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: visible ? 0 : 1 }}>
                {opacity =>
                    <div className='UnderBarWrapper' style={opacity}>
                        Solve!
                    </div>
                }
            </Spring>
        );
    }
}

export default UnderBar;
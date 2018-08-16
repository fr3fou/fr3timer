import React, { Component } from 'react';
import '../assets/css/BottomBar.css';
import { Spring } from 'react-spring';

class BottomBar extends Component {

    render() {
        let visible = this.props.visible;
        return (
            <Spring from={{ height: 0 }}
                force to={{ height: visible ? 'auto' : 0 }}>
                {styles =>
                    <div className='BottomBarWrapper' style={styles}>
                        asdf
                    </div>
                }
            </Spring>
        );
    }
}

export default BottomBar;
import React, { Component } from 'react';
import '../assets/css/BottomBar.css';
import { Spring } from 'react-spring';
import EventSwitcher from './EventSwitcher';
class BottomBar extends Component {

    render() {
        let visible = this.props.isSolving;
        return (
            <Spring from={{ height: 0 }}
                force to={{ height: visible ? 'auto' : 0 }}>
                {styles =>
                    <div className='BottomBarWrapper' style={styles}>
                        <EventSwitcher/>
                    </div>
                }
            </Spring>
        );
    }
}

export default BottomBar;
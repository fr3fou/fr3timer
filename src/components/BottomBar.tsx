import * as React from 'react';
import { Spring } from 'react-spring';
import '../assets/css/BottomBar.css';
import EventSwitcher from './EventSwitcher'; 
class BottomBar extends React.Component<any, any> {

    render() {
        const visible = this.props.isSolving;
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
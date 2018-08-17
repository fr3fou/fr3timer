import * as React from 'react';
import { Spring } from 'react-spring';
import '../assets/css/UnderBar.css';

class UnderBar extends React.Component<any, any> {
    render() {
        const visible = this.props.isSolving;
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
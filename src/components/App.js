import React, { Component } from 'react';
import '../assets/css/App.css';
import TopBar from './TopBar';
import Timer from './Timer';

// important!!!
// https://stackoverflow.com/questions/37949981/call-child-method-from-parent
// https://stackoverflow.com/questions/30845910/how-do-i-set-state-of-sibling-components-easily-in-react
// important!!!

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTopBarVisible: true,
    }
  }

  handleTimer() {
    this.setState({
      isTopBarVisible: !this.state.isTopBarVisible
    });
  }

  render() {
    return (
      <div>
        <TopBar visible={this.state.isTopBarVisible} />
        <Timer digits='1' isWorking={this.handleTimer.bind(this)} />
      </div>
    );
  }
}

export default App;

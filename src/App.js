import React, { Component } from 'react';
import './assets/css/App.css';
import './assets/fonts/style.css';
import TopBar from './components/TopBar.jsx';
import Timer from './components/Timer.jsx';
import BottomBar from './components/BottomBar.jsx';

// important!!!
// https://stackoverflow.com/questions/37949981/call-child-method-from-parent
// https://stackoverflow.com/questions/30845910/how-do-i-set-state-of-sibling-components-easily-in-react
// important!!!

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSolving: true,
    }
  }

  handleTimer() {
    this.setState({
      isSolving: !this.state.isSolving
    });
  }

  render() {
    return (
      <div>
        <TopBar isSolving={this.state.isSolving} />
        <Timer digits='1' isSolving={this.handleTimer.bind(this)} />
        <BottomBar isSolving={this.state.isSolving} />
      </div>
    );
  }
}

export default App;

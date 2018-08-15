import React, { Component } from 'react';
import '../assets/css/App.css';
import TopBar from './TopBar';
import Timer from './Timer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      puzzleType: 333
    }
  }
  
  render() {
    return (
      <div>
        <TopBar
          puzzleType={this.state.puzzleType} />
        <Timer
        />
      </div>
    );
  }
}

export default App;

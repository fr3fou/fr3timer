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

  handleKeyPressed(e) {
    if(e.key === 'Space'){
      console.log('timer started')
    }
  }

  render() {
    return (
      <div>
        <TopBar onKeyPress={this.handleKeyPressed} puzzleType={this.state.puzzleType}/>
        <Timer /> 
      </div>
    );
  } 
}

export default App;

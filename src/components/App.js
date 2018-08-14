import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/css/App.css';
import TopBar from './TopBar';
import Button from '@material-ui/core/Button';

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
        <TopBar puzzleType={this.state.puzzleType}/>
        <Button variant="contained" color="primary">Generate Scramble</Button>
      </div>
    );
  }
}

export default App;

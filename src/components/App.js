import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/css/App.css';
import TopBar from './TopBar';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <TopBar />
    );
  }
}

export default App;

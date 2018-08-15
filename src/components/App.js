import React, { Component } from 'react';
import '../assets/css/App.css';
import TopBar from './TopBar';
import Timer from './Timer';

class App extends Component {
  render() {
    return (
      <div>
        <TopBar/>
        <Timer digits='2'/>
      </div>
    );
  }
}

export default App;

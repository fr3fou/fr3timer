import * as React  from 'react';
import './assets/css/App.css';
import './assets/fonts/style.css';
import BottomBar from './components/BottomBar';
import Timer from './components/Timer';
import TopBar from './components/TopBar';

// important!!!
// https://stackoverflow.com/questions/37949981/call-child-method-from-parent
// https://stackoverflow.com/questions/30845910/how-do-i-set-state-of-sibling-components-easily-in-react
// important!!!

class App extends React.Component<any, any> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isSolving: true,
    }
    this.handleTimer = this.handleTimer.bind(this);
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
        <Timer digits='1' isSolving={this.handleTimer} />
        <BottomBar isSolving={this.state.isSolving} />
      </div>
    );
  }
}

export default App;

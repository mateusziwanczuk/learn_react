import React, { Component } from 'react';
import Newcomp from './Newcomp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <p>Welcome :)</p>
        <Newcomp />
      </div>
    );
  }
}

export default App;

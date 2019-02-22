import React, { Component } from 'react';
import Newcomp from './Newcomp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <p>Welcome :)</p>
        <Newcomp name="Mateusz" age="24"/>
        <Newcomp name="AlterEgo" age="23"/>
          {/* ^ Because of props you can use <Newcomp /> several times
                <div className="NewComp">
                  <div>Name: { name } </div> 
                  <div>Age: { age } </div>
                </div> */}
      </div>
    );
  }
}

export default App;

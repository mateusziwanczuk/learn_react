import React, { Component } from 'react';
import Person from './Components/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person name="Mateusz" age="24" />
        <Person name="Martyna" age="22"  >Hobby: Travel</Person>
        <Person name="Janusz" age="65" />
      </div>
    );
  }
}

export default App;

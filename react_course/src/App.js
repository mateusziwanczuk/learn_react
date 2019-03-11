import React, { Component } from 'react';
import Person from './Components/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Mateusz', age: 24 },
      { name: 'Martyna', age: 22 },
      { name: 'Janusz', age: 65 },
    ]
  }
  render() {
    return (
      <div className="App">
        <Person name={ this.state.persons[0].name} age={ this.state.persons[0].age } />
        <Person name={ this.state.persons[1].name} age={ this.state.persons[1].age } />
        <Person name={ this.state.persons[2].name} age={ this.state.persons[2].age } />
      </div>
    );
  }
}

export default App;

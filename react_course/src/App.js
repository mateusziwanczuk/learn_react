import React, { Component } from 'react';
import Person from './Components/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Mateusz', age: 24 },
      { name: 'Martyna', age: 22 },
      { name: 'Jan', age: 26 },
    ]
  }
  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Mati', age: 14 },
        { name: 'Martynka', age: 12 },
        { name: 'Janek', age: 16 },
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <Person name={ this.state.persons[0].name} age={ this.state.persons[0].age } />
        <Person name={ this.state.persons[1].name} age={ this.state.persons[1].age } />
        <Person name={ this.state.persons[2].name} age={ this.state.persons[2].age } />
        <button onClick={this.switchNameHandler}>Be young again!</button>
          {// Bez nawiasów przy funkcji! Nie chcemy, by się wywołała od razu, ale na kliknięcie.
           // Only reference to the function! 
          }
      </div>
    );
  }
}

export default App;

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
  changeName = event => {
    this.setState({
      persons: [
        { name: 'Mati', age: 14 },
        { name: 'Martynka', age: 12 },
        { name: event.target.value, age: 16 },
      ]
    })
  }


  render() {
    return (
      <div className="App">
        <Person 
          name={ this.state.persons[0].name} 
          age={ this.state.persons[0].age } 
          click={ this.switchNameHandler } />
        <Person 
          name={ this.state.persons[1].name} 
          age={ this.state.persons[1].age } 
          click={ this.switchNameHandler } />
        <Person 
          name={ this.state.persons[2].name} 
          age={ this.state.persons[2].age } 
          click={ this.switchNameHandler } 
          changed={ this.changeName} />
        <button onClick={this.switchNameHandler}>Be young again!</button>
      </div>
    );
  }
}

export default App;

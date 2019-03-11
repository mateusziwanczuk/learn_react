import React, { Component } from 'react';
import Person from './Components/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Mateusz', age: 24 },
      { name: 'Martyna', age: 22 },
      { name: 'Jan', age: 26 },
    ],
    otherState: 'some other value',
    showPersons: false,
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div >
          <Person 
            name={ this.state.persons[0].name} 
            age={ this.state.persons[0].age } />
          <Person 
            name={ this.state.persons[1].name} 
            age={ this.state.persons[1].age } />
          <Person 
            name={ this.state.persons[2].name} 
            age={ this.state.persons[2].age } />
        </div> 
      )
    }
    return (
      <div className="App">
        <button 
          onClick={this.togglePersonsHandler}>Switch name
        </button>
        { persons }
      </div>
    );
  }
}

export default App;

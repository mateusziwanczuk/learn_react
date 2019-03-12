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
        <div>
          { 
            this.state.persons.map( person => {
            return <Person name={person.name} age={person.age}/>
            })
          }
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

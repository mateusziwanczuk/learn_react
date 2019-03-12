import React, { Component } from 'react';
import Person from './Components/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { id: "1", name: 'Mateusz', age: 24 },
      { id: "2", name: 'Martyna', age: 22 },
      { id: "3", name: 'Jan', age: 26 },
    ],
    otherState: 'some other value',
    showPersons: false,
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }
  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          { 
            this.state.persons.map((person, index) => {
            return <Person 
              name={person.name} 
              age={person.age}
              key={person.id}
              click={() => this.deletePersonHandler(index)} />
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

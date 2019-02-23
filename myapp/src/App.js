import React, { Component } from 'react';
import Persons from './Persons';
import AddPerson from './AddPerson';

class App extends Component {
  state = {
    persons : [
      { name: 'Mateusz', age: 24, id: 1 },
      { name: 'Borys', age: 27, id: 2 },
      { name: 'Sebastian', age: 30, id: 3 },
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Persons persons={ this.state.persons }/>
        <AddPerson />
      </div>
    );
  }
}

export default App;

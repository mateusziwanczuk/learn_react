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
  addPerson = person => {
    person.id = Math.random();
    let persons = [...this.state.persons, person]
    this.setState({
      persons: persons
    })
  }
  deletePerson = id => {
    let persons = this.state.persons.filter(person => {
      return person.id !== id; // filter out person with this id
    })
    this.setState({
      persons: persons
    })
  }
  componentDidMount(){
    console.log('component mounted')
  }
  componentDidUpdate(prevProps, prevState){
    console.log('component updated');
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className="App">
        <h1>Persons list</h1>
        <AddPerson addPerson={ this.addPerson }/>
        <br/>
        <Persons deletePerson={ this.deletePerson } persons={ this.state.persons }/>
      </div>
    );
  }
}

export default App;

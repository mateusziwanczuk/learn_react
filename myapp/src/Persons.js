import React, { Component } from 'react';

class Persons extends Component {
    render(){
        const { persons } = this.props;
        const personsList = persons.map(person => {
            if (person.age >= 30) {
                return (
                    <div className="person" key={person.id}>
                        <div>Name: { person.name } </div> 
                        <div>Age: { person.age } </div>
                    </div>
                )
            } else {
                return null;
            }
        })

        return(
            <div className="personsList">
                { personsList }
            </div>
        )
    }
}

export default Persons;
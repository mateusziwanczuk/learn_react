import React, { Component } from 'react';

const Persons = ({persons, deletePerson}) => {
    const personsList = persons.map(person => {
        return (
            <div className="person" key={person.id}>
                <div>Name: { person.name } </div> 
                <div>Age: { person.age } </div>
                <button onClick={() => {deletePerson(person.id)}}>Delete</button>
            </div>
        )
    })

    return(
        <div className="personsList">
            { personsList }
        </div>
    )
}

export default Persons;
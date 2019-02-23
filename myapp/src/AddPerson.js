import React, { Component } from 'react'

class AddPerson extends Component {
    state = {
        name: null,
        age: null,
    }
    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
    }
    render(){
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={ this.handleChange } />
                    <label htmlFor="name">Age:</label>
                    <input type="text" id="age" onChange={ this.handleChange } />
                        {/* htmlFor -> JSX */}
                    <button>Submit</button>
                        {/* console.log(this.state) */}
                </form>
            </div>
        )
    }
}

export default AddPerson;
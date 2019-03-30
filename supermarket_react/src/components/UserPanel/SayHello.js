import React from 'react';
import './User.css';

class SayHello extends React.Component {
    state = {
        name: "",
    }
    componentDidMount(){
        fetch('user.json')
            .then(response => response.json())
            .then(value => this.setState({name: value.name}))
    }
    render (){
        return <h1 className="user__container__left__header">Hello {this.state.name}!</h1>
    }      
}

export default SayHello;
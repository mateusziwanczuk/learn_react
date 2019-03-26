import React from 'react';
import Avatar from './Avatar';
import UserData from './UserData';

import './User.css';

class UserPanel extends React.Component {
    state = {
        name: "",
    }
    componentDidMount(){
        fetch('user.json')
            .then(response => response.json())
            .then(value => this.setState({name: value.name}))
    }
    
    render (){
        return(
            <div className="user__container">
                <div className="user__container__left">
                    <h1 className="sayHello">Hello {this.state.name}!</h1>
                    <Avatar />
                    <UserData />
                </div>
                <div className="user__container__right">
                </div>
            </div>
        )
    }
}

export default UserPanel;
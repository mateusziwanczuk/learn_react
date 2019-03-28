import React from 'react';
import SayHello from './SayHello';
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
                    <SayHello />
                    <div className="user__container__left__top">
                        <Avatar />
                        <UserData />
                    </div>
                </div>
                <div className="user__container__right">
                </div>
            </div>
        )
    }
}

export default UserPanel;
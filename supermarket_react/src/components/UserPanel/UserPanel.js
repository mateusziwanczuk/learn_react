import React from 'react';
import SayHello from './SayHello';
import Avatar from './Avatar';
import UserData from './UserData';
import UserMarket from './UserMarket';
import MarketList from './MarketsList'

import './User.css';

class UserPanel extends React.Component {
    state = {
        name: ""
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
                    <UserMarket />
                </div>
                <div className="user__container__right">
                    <MarketList />
                </div>
            </div>
        )
    }
}

export default UserPanel;
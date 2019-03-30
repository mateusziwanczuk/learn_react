import React from 'react';

class UserMarket extends React.Component {
    // state = {  }
    render() { 
        return (
            <>
                <h1 className="user__container__right__header">Your market</h1>
                <div className="user__container__right__market">
                    <img src="/img/react_market.jpg"/>
                </div>
            </>
        )
    }
}
 
export default UserMarket;
import React from 'react';

class UserMarket extends React.Component {
    state = {
        "contactInfo": {
            "address": {
                "street": "3681 Veltri Drive",
                "zipcode": "99501",
                "city": "Anchorage",
                "state": "Alaska"
            },
            "phone": "907-297-2483"
        },
        "openingHours": {
            "open": 7,
            "close": 21
        }
    }
    componentDidMount(){
        fetch('markets.json')
            .then(response => response.json())
        this.isMarketOpened();
    }
    isMarketOpened = () => {
        let date = new Date();
        let hourNow = date.getHours();
        let openClose = document.querySelector(".isMarketOpened")
        if (hourNow < this.state.openingHours.open || hourNow > this.state.openingHours.close) {
            openClose.innerHTML = "(Closed)"
            openClose.style.color = "red"
        } else {
            openClose.innerHTML = "(Opened)"
            openClose.style.color = "green"
        }
        
    }
    render() { 
        return (
            <>
                <h1 className="user__container__right__header">Your market</h1>
                <div className="user__container__right__market">
                    <img src="/img/react_market.jpg" alt="market_photo"/>
                    <div className="user__container__right__market__marketdata">
                        <h3>Supermarket React</h3>
                        <h4>{this.state.contactInfo.address.street}</h4>
                        <h4>
                            {this.state.contactInfo.address.zipcode}&nbsp;
                            {this.state.contactInfo.address.city},&nbsp;
                            {this.state.contactInfo.address.state}<br/>
                            <br/>
                            Contact: {this.state.contactInfo.phone}<br/>
                            <br/>
                            Opening hours:<br/>
                            <span>{this.state.openingHours.open}:00 - {this.state.openingHours.close}:00 </span>
                            <span className="isMarketOpened"></span>
                        </h4>
                    </div>
                </div>
            </>
        )
    }
}
 
export default UserMarket;
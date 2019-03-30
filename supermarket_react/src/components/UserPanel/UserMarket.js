import React from 'react';

class UserMarket extends React.Component {
    state = {
        "contactInfo": {
            "address": {
                "street": "",
                "zipcode": "",
                "city": "",
                "state": ""
            },
            "phone": ""
        }
    }
    componentDidMount(){
        fetch('markets.json')
            .then(response => response.json())
            .then(this.setState({
                "contactInfo": {
                "address": {
                    "street": "3681 Veltri Drive",
                    "zipcode": "99501",
                    "city": "Anchorage",
                    "state": "Alaska"
                },
                "phone": "907-297-2483"
            }}))
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
                            Opening hours: 
                        </h4>
                    </div>
                </div>
            </>
        )
    }
}
 
export default UserMarket;
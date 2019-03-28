import React from 'react';

class Nickname extends React.Component {
    state = {
        registered: "",
        nickname: "",
        email: "",
        address1: "",
        address2: "",
        phone: "",
        showInput: false,
    }
    componentDidMount(){
        fetch('user.json')
            .then(response => response.json())
            .then(value => this.setState({
                nickname: value.nickname, 
                registered: value.registered, 
                email: value.email, 
                address1: value.address.street, 
                address2: `${value.address.zipcode} ${value.address.city}`, 
                phone: value.phone 
            }))
    }
    editUserData = () => {
        const doInputsShow = this.state.showInput;
        this.setState( { 
            showInput: !doInputsShow 
        });
        let inputs = document.querySelectorAll(".change__data__container");
        let editButton = document.querySelector(".edit__button");
        if (this.state.showInput) {
            inputs.forEach( input => input.classList.add("unvisible"));
            editButton.innerHTML = "Edit";
        } else {
            inputs.forEach( input => input.classList.remove("unvisible"));
            editButton.innerHTML = "Save";

        }
    }
    editEmail = (e) => { this.setState({ email: e.target.value }) }
    editAddress1 = (e) => { this.setState({ address1: e.target.value }) }
    editAddress2 = (e) => { this.setState({ address2: e.target.value }) }
    editPhone = (e) => { this.setState({ phone: e.target.value }) }

    render (){
        return(
            <div className="user__container__left__top__userdata">
                <span style={{fontSize: "1.2rem"}}>Registered: {this.state.registered}</span>
                <h2>
                    <span role="img" aria-label="user">👤 </span> 
                    Login: {this.state.nickname}
                </h2> 
                <h2>
                    <span role="img" aria-label="phone">📞 </span> 
                    Contact <span className="edit__button" onClick={this.editUserData}>Edit</span>
                </h2>
                    <div className="user__container__left__top__userdata__contact">
                        <div>
                            <h4>e-mail: </h4>
                            <h4>address: </h4>
                            <br />
                            <h4>phone: </h4>
                        </div>
                        <div>
                            <h4>{this.state.email}</h4>
                                <div className="change__data__container unvisible">
                                    <input type="email" value={this.state.email} onChange={this.editEmail}></input>
                                </div>
                            <h4>{this.state.address1}</h4>
                            <h4>{this.state.address2}</h4>
                                <div className="change__data__container unvisible">
                                    <input type="text" value={this.state.address1} onChange={this.editAddress1}></input>
                                    <input type="text" value={this.state.address2} onChange={this.editAddress2}></input>
                                </div>
                            <h4>{this.state.phone}</h4>
                                <div className="change__data__container unvisible">
                                    <input type="text" value={this.state.phone} onChange={this.editPhone}></input>
                                </div>
                        </div>
                    </div>  
            </div>
        )
    }
}

export default Nickname;
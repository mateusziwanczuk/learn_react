import React from 'react';
import firebase from 'firebase'

class UserData extends React.Component {
    state = {
        authUser: null,
        authUserRegistered: '',
        authUserEmail: '',
        authIsChecked: false,
        showInput: false,
    }
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user =>
            this.setState({
                authUser: user,
                authUserId: user.uid,
                authUserEmail: user.email,
                authUserRegistered: user.metadata.creationTime,
                authIsChecked: true,
            })
        )
        const databaseRef = firebase.database().ref('users')
        databaseRef.once('value')
            .then(snapshot => {
                const snapshotVal = snapshot.val() || {};
                const user = Object.keys(snapshotVal)
                console.log(user)
            })
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
                {console.log(this.state.authUser)}
                <span style={{fontSize: "1.2rem"}}>Registered: {this.state.authUserRegistered}</span>
                <h2>
                    <span role="img" aria-label="user">👤 </span> 
                    Name: {this.state.nickname}
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
                            <h4>{this.state.authUserEmail}</h4>
                                <div className="change__data__container unvisible">
                                    <input type="email" value={this.state.authUserEmail} onChange={this.editEmail}></input>
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

export default UserData;
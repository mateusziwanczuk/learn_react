import React from 'react';
import firebase from 'firebase'
import DeleteUser from './DeleteUser'

class UserData extends React.Component {
    state = {
        authUser: null,
        authUserRegistered: '',
        authUserEmail: '',
        authIsChecked: false,
        showInput: false,
    }
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    authUser: user,
                    authUserId: user.uid,
                    authUserEmail: user.email,
                    authUserRegistered: user.metadata.creationTime,
                    authIsChecked: true,
                })
            }
        })
        const databaseRef = firebase.database().ref('users')
        databaseRef.once('value')
            .then(snapshot => {
                const snapshotVal = snapshot.val() || {};
                const findUser = Object.keys(snapshotVal)
                    .map(key => ({
                        id: key,
                        ...snapshotVal[key]
                    }))
                    .filter(user => {
                        return user.id === this.state.authUserId
                    })
                const user = findUser[0]
                this.setState({ user })
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

    editAddress1 = (e) => { 
        if (this.state.user) { 
            this.setState({ 
                user: {
                    ...this.state.user,
                    street: e.target.value 
                }
            }, () => {
            firebase.database()
                .ref(`users/${this.state.authUserId}`)
                .update({ street: this.state.user.street })
            }) 
        }
    }

    editAddress2 = (e) => { 
        if (this.state.user) { 
            this.setState({ 
                user: {
                    ...this.state.user,
                    city: e.target.value 
                }
            }, () => {
            firebase.database()
                .ref(`users/${this.state.authUserId}`)
                .update({ city: this.state.user.city })
            }) 
        }
    }

    editPhoneNum = (e) => {
        if (this.state.user) { 
            this.setState({ 
                user: {
                    ...this.state.user,
                    phone: e.target.value 
                }
            }, () => {
                firebase.database()
                .ref(`users/${this.state.authUserId}`)
                .update({ phone: this.state.user.phone })
            })    
        }
    }

    render (){
        return(
            <div className="user__container__left__top__userdata">
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
                            <h4>{ this.state.user ? this.state.user.street : null }</h4>
                            <h4>{ this.state.user ? this.state.user.city : null }</h4>
                            <h4>{ this.state.user ? this.state.user.phone : null }</h4>
                                <div className="change__data__container unvisible">
                                    <input 
                                        type="text" 
                                        value={ this.state.user ? this.state.user.street : '' } 
                                        onChange={this.editAddress1}>
                                    </input>
                                    <input 
                                        type="text" 
                                        value={ this.state.user ? this.state.user.city : '' } 
                                        onChange={this.editAddress2}>
                                    </input>
                                    <input 
                                        type="text" 
                                        value={ this.state.user ? this.state.user.phone : '' } 
                                        onChange={this.editPhoneNum}>
                                    </input>
                                    <DeleteUser />
                                </div>
                        </div>
                    </div>  
            </div>
        )
    }
}

export default UserData;
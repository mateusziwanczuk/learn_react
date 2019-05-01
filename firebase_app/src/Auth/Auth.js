import React, {Component} from 'react';
import firebase from "firebase";
import { Redirect } from 'react-router';

class Auth extends Component {
    state = {
        user: null,
        isChecked: false
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user =>
            this.setState({
                user,
                isChecked: true
            }))
    }

    render() {
        return this.state.user
            ? this.props.children 
            : this.state.isChecked 
                ? <Redirect to='/sign-in' />
                : null
        } 

}

export default Auth
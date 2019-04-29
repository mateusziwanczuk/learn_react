import React, {Component} from 'react';
import firebase from "firebase";

class Auth extends Component {
    state = {
        user: null
    };
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user =>
            this.setState({user}))
    }
    render() {
        return this.state.user
            ? this.props.children 
            : <h1>Log in!</h1>
    }
}

export default Auth 
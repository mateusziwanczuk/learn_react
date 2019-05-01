import React, { Component } from "react";
import Nav from "./Navigation/Navigation.js";
import Content from "./Content.js";
import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDBsLbZsyfcgRKu9yT5Wj0wez9_G2n600E",
  authDomain: "fir-app-155b8.firebaseapp.com",
  databaseURL: "https://fir-app-155b8.firebaseio.com",
  projectId: "fir-app-155b8",
  storageBucket: "fir-app-155b8.appspot.com",
  messagingSenderId: "437448437927"
};
firebase.initializeApp(config);

class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Content />
            </div>
        );
    }
}

export default App;
import React, { Component } from 'react';
import firebase from 'firebase'
import './App.css';

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
    return <h1>Hello</h1>
  }
}

export default App;

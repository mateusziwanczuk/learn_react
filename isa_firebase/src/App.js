import React from 'react';
import firebase from 'firebase'
import Todo from './Components/Todo'
import './index.css';

var config = {
  apiKey: "AIzaSyDQsYhxD9n0pYnLYIAgUcz5oiI4DFCK6lE",
  authDomain: "isa-firebase-4e054.firebaseapp.com",
  databaseURL: "https://isa-firebase-4e054.firebaseio.com",
  projectId: "isa-firebase-4e054",
  storageBucket: "isa-firebase-4e054.appspot.com",
  messagingSenderId: "13748092780"
};
firebase.initializeApp(config);

class App extends React.Component {
  render() { 
    return (
      <Todo />
    );
  }
}

export default App;

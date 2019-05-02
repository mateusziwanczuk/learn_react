import React from 'react';
import firebase from 'firebase'
import Todo from './Components/Todo'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
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
  state = {
    user: null
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(user => {
        this.setState({ user: user.email })
    })
  }

  render() { 
    return (
      <>
        {this.state.user 
          ? <span>
              {this.state.user}
              <Todo />
            </span>
          : <div className="sign__container">
              <SignIn />
              <SignUp />
            </div>
        }
      </>
    );
  }
}

export default App;

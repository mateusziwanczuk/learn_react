import React, { Component } from 'react';
import { increment, decrement } from "./actions/counter";
import {connect} from 'react-redux'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p>
            <button onClick={this.props.decreaseCounter}>-</button>
            <span> COUNTER: {this.props.counter} </span>
            <button onClick={this.props.increaseCounter}>+</button>
          </p>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
  increaseCounter: () => dispatch(increment()),
  decreaseCounter: () => dispatch(decrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

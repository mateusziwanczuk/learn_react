import React, { Component } from 'react';
import { increment, decrement } from "./actions/counter";
import { changeRotation } from "./actions/animation";
import {connect} from 'react-redux'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={`App-logo ${this.props.animationRotation === 'left' ? 'App-logo--left' : '' }`} alt="logo" />
          <p>
            <button onClick={this.props.decreaseCounter}>-</button>
            <span> COUNTER: {this.props.counter} </span>
            <button onClick={this.props.increaseCounter}>+</button>
            <button onClick={this.props.changeRotation}>?</button>
          </p>
        </header>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  counter: state.counter,
  animationRotation: state.animation.direction
})

const mapDispatchToProps = (dispatch) => ({
  increaseCounter: () => dispatch(increment()),
  decreaseCounter: () => dispatch(decrement()),
  changeRotation: () => dispatch(changeRotation())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

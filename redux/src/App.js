import React, { Component } from 'react';
import { increment, decrement, amountChange,changeByAmount } from "./actions/counter";
import { changeRotation } from "./actions/animation";
import { connect } from 'react-redux';
import TodoList from './TodoList'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={`App-logo ${this.props.animationRotation === 'left' ? 'App-logo--left' : '' }`} alt="logo" />
          <p>
            <button className="button" onClick={this.props.decreaseCounter}>-</button>
            <span> COUNTER: {this.props.counter} </span>
            <button className="button"onClick={this.props.increaseCounter}>+</button>
            <br/><br/>
            <input type='text' onChange={(e) => this.props.amountChange(e.target.value)} />
            <button className="add_button" onClick={this.props.changeByAmount}>ADD</button>
            <br/><br/>
            <button className="button" onClick={this.props.changeRotation}>?</button>
          </p>
        </header>
        <TodoList />
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  counter: state.counter.count,
  animationRotation: state.animation.direction,
})
  // Stan oraz funkcje rozsyłające akcje dostępne są w this.props. 
  // Funkcja mapStateToProps pobiera state jako parametr i zwraca nowy obiekt. 


const mapDispatchToProps = (dispatch) => ({
  increaseCounter: () => dispatch(increment()),
  decreaseCounter: () => dispatch(decrement()),
  changeRotation: () => dispatch(changeRotation()),
  amountChange: (value) => dispatch(amountChange(value)),
  changeByAmount: () => dispatch(changeByAmount())
})
  // Funkcja mapDispatchToProps zwraca obiekt zawierający metody. Po wywołaniu funkcji dispatch wysyłane są obiekty akcji do store. 


  
export default connect(mapStateToProps, mapDispatchToProps)(App);
  // Funkcja connect przyjmuje jako parametry funkcje mapStateToProps i mapDispatchToProps, a wyniki ich wywołania łączy w obiekt. Następnie zwraca funkcję, 
  // która jako parametr przyjmuje komponent, poczym przygotowany obiekt trafia do this.props tego komponentu. 
  // Funkcja zwracana przez funkcję connect opakowuje przekazany komponent i zwraca nową jego wesję. 

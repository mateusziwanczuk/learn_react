import React from "react";
import { connect } from 'react-redux' 
import todoActions from './actions/todo'
import "./App.css";

class TodoList extends React.Component {
  render() {
    return (
      <div className="todo_app">
      <br/><br/>
      <input type='text' value={this.props.inputValue} onChange={e => this.props.changeInputValue(e.target.value)}></input>
        {this.props.todos.map(todo => {
            return (
                <div>{todo.text}</div>
            )
        })}
        <button onClick={this.props.addTodo }>ADD TODO</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    todos: state.todo.todos,
    inputValue: state.todo.inputValue 
})

const mapDispatchToProps = {
    ...todoActions
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

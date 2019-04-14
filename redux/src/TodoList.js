import React from "react";
import { connect } from 'react-redux' 
import todoActions from './actions/todo'
import "./App.css";

class TodoList extends React.Component {
  render() {
    return (
      <div className="todo_app">
        {this.props.todos.map(todo => {
            return (
                <span>{todo.text}</span>
            )
        })}
        <button onClick={this.props.addTodo }>ADD TODO</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    todos: state.todo.todos
})

const mapDispatchToProps = {
    ...todoActions
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

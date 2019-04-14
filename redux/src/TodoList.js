import React from "react";
import { connect } from "react-redux";
import todoActions, { todoStatuses } from "./actions/todo";
import TodoItem from "./TodoItem";
import "./App.css";

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }
  render() {
    return (
      <div className="todo_app">
        <br />
        <br />
        <input
          type="text"
          value={this.props.inputValue}
          onChange={e => this.props.changeInputValue(e.target.value)}
        />
        <button onClick={this.props.addTodo}>ADD TODO</button>
        {this.props.todos.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              isCompleted={todo.status === todoStatuses.COMPLETED}
              id={todo.id}
              onComplete={id =>
                this.props.changeTodoStatus(todoStatuses.COMPLETED, id)
              }
              onDelete={id => this.props.deleteTodo(id)}
            >
              <br />
              <span>{todo.text} </span>
            </TodoItem>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todo.todos,
  inputValue: state.todo.inputValue
});

const mapDispatchToProps = {
  ...todoActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

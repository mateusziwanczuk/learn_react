import React from 'react';
import firebase from 'firebase'
import AddTask from './AddTask'
import '../index.css'

class Todo extends React.Component {
    state = {
        todos: [],
        task: '',
        edit: {
            id: null,
            task: ''
        }
	};

	componentDidMount() {
        this.getData()
    }

    getData = () => {
        const databaseRef = firebase.database().ref('Todo')
        databaseRef.once('value')
            .then(snapshot => {
                const todosSnapshot = snapshot.val() || {};
                const todosArray = Object.keys(todosSnapshot).map(key => ({
                    id: key,
                    ...todosSnapshot[key]
                }))
                this.setState({
                    todos: todosArray || []
                })
            })
        databaseRef.on("value", snapshot => {
            const todosSnapshot = snapshot.val();
            const todosArray = Object.keys(todosSnapshot).map(key => ({
                id: key,
                ...todosSnapshot[key]
            }))
            this.setState({ todos: todosArray || [] });
            });
    }

    handleInputChange = e => {
        this.setState({
            task: e.target.value
        })
    }

    handleEditChange = e => {
        this.setState({
            edit: {
                task: e.target.value
            }
        })
    }

    addTask = e => {
        e.preventDefault()
        let task = this.state.task
        let databaseRef = firebase.database().ref('Todo')
        
        if (databaseRef && this.state.task){
            const taskId = databaseRef.push().key
            databaseRef
            .child('Todo' + taskId)
            .set({
                task,
                done: false
            })
            .then(() => {
                this.setState.task = ''
            })
        }
    }

    removeTask = id => {
        firebase.database().ref('Todo/' + id).remove()
    }

    editTask = id => {
        const editId = this.state.edit.id
        const editTask = this.state.edit.task
        const todos = this.state.todos
        const databaseRef = firebase.database().ref('Todo/' + id)

        if (editId) {
            databaseRef
                .update({ task: editTask })
                .then(() => {
                    this.getData()
                })
            this.setState({ 
                edit: { 
                    id: null 
                }
            })
        } else {
            const editedTodo = todos.find(todo => todo.id === id)
            this.setState({
                edit: {
                    id,
                    task: editedTodo.task
                }
            })
        }
    }

    isTaskDone = id => {
        var task = this.state.todos.find(todo => todo.id === id)
        task.done = !task.done
        firebase.database().ref('Todo/' + id)
            .update({...task})
            .then(() => this.getData())
    }

    render() { 
        return (
            <>
                {this.state.todos.map(todo => (
                    <p key={todo.id}>
                        <span className="todo-emoji" role='img' aria-label="delete" onClick={() => this.removeTask(todo.id)}>❌</span>
                        <span className="todo-emoji" role='img' aria-label="edit" onClick={() => this.editTask(todo.id)}>🛠️</span>                        
                        {todo.done === false ? 
                        <span className="undone" onClick={() => this.isTaskDone(todo.id)}>UNDONE</span>
                        :
                        <span className="done" onClick={() => this.isTaskDone(todo.id)}>DONE</span>
                        }
                        {this.state.edit.id === todo.id 
                            ? 
                            <span>
                                <input type="text" value={this.state.edit.task} onChange={this.handleEditChange}/>
                                <button>OK</button>
                            </span>
                            : todo.task.toString()
                        }
                        
                    </p>
                ))}
                <AddTask 
                    addTask = { this.addTask }
                    value = {this.state.task }
                    onInputChange = { this.handleInputChange }
                />
            </>
        );
    }
}
 
export default Todo;
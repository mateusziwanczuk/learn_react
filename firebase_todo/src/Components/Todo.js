import React from 'react';
import firebase from 'firebase'
import Auth from '../Components/Auth';
import SignOut from '../Components/SignOut'
import AddTask from './AddTask'
import TodoTask from './TodoTask'
import '../index.css'

class Todo extends React.Component {
    state = {
        todos: [],
        task: '',
        editId: null,
        editedTask: ''
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
            editedTask: e.target.value
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
        const editId = this.state.editId
        const editedTask = this.state.editedTask
        const todos = this.state.todos
        const databaseRef = firebase.database().ref('Todo/' + id)

        if (editId) {
            databaseRef
                .update({ task: editedTask })
                .then(() => {
                    this.getData()
                })
            this.setState({ 
                editId: null 
            })
        } else {
            const editedTodo = todos.find(todo => todo.id === id)
            this.setState({
                editId: id,
                editedTask: editedTodo.task
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
        const editId = this.state.editId
        const todos = this.state.todos
        const editedTask = this.state.editedTask
        return (
            <>
                <Auth>
                    <SignOut />
                    {todos.map(todo => (
                        <TodoTask
                        todo = { todo }
                        key = { todo.id }
                        removeTask = { this.removeTask }
                        isTaskDone = { this.isTaskDone }
                        editId = { editId }
                        editTask = { this.editTask }
                        editedTask = { editedTask }
                        handleEditChange = { this.handleEditChange }
                        />
                        ))}
                    <AddTask 
                        addTask = { this.addTask }
                        value = {this.state.task }
                        onInputChange = { this.handleInputChange }
                    />
                </Auth>
            </>
        );
    }
}
 
export default Todo;
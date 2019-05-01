import React from 'react';
import firebase from 'firebase'
import AddTask from './AddTask'

class Todo extends React.Component {
    state = {
        todos: [],
        task: ''
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
            const todosSnapshot = snapshot.val() || {};
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

    addTask = e => {
        e.preventDefault()
        let task = this.state.task
        let databaseRef = firebase.database().ref('Todo')

        if (databaseRef && this.state.task){
            const newTaskId = databaseRef.push().key
            databaseRef
                .child("todo" + newTaskId)
                .set({
                    task,
                    done: false
                })
                .then(() => {
                    this.setState.task = ''
                })
        }
    }

    render() { 
        return (
            <>
                {this.state.todos.map(todo => (
                    <p key={Math.random()}>{todo.task}</p>
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
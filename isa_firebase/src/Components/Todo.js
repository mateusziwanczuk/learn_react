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

    render() { 
        return (
            <>
                {this.state.todos.map(todo => (
                    <p key={Math.random()}>
                        <span role='img' aria-label="delete" onClick={() => this.removeTask(todo.id)}>❌ </span> {todo.task}

                    {console.log(todo)}
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
import React from 'react';
import firebase from 'firebase'
import AddTask from './AddTask'

class Todo extends React.Component {
    state = {
		todos: []
	};

	componentDidMount() {
        this.getData()
    }

    getData = () => {
        firebase.database().ref('Todo').once('value')
            .then(snapshot => {
                this.setState({
                    todos: [snapshot.val()]
                })
            })
    }

    render() { 
        return (
            <>
                {console.log(this.state.todos)}
                {this.state.todos.map(todo => (
                    <span key={new Date()}>{todo.task}</span>
                ))}
                <AddTask />
            </>
        );
    }
}
 
export default Todo;
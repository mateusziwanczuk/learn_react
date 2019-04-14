import localForage from 'localforage'

export const ADD_TODO = 'ADD_TODO'
export const CHANGE_STATUS = 'CHANGE_STATUS'
export const DELETE_TODO = 'DELETE_TODO'
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE'
export const FETCH_TODOS = 'FETCH_TODOS'

const addTodo = () => (dispatch, getState) => {
    const id = Date.now()
    const todoAction = {
        type: ADD_TODO,
        id
    }
    const lsTodo = {
        id,
        text: getState().todo.inputValue,
        status: todoStatuses.NOT_COMPLETED
    }
    return localForage.getItem('todos').then(todos => {
        if (todos) {
            localForage.setItem('todos', [...todos, lsTodo])
                .then(() => {
                    dispatch(todoAction)
                })
        } else {
            localForage.setItem('todos', [lsTodo])
                .then(() => {
                    dispatch(todoAction)
                })
        }
    })
}

export const fetchTodos = () => dispatch => {
    return localForage.getItem('todos').then(todos => {
        dispatch({
            type: 'FETCH_TODO',
            todos: todos || []
        })
    })
} 

export const deleteTodo = id => dispatch => {
    return localForage.getItem('todos')
        .then(todos => {
            if(todos) {
                const filteredTodos = todos.filter(todo => todo.id !== id)
                localForage.setItem('todos', filteredTodos)
                    .then(() => {
                        dispatch({
                            type: DELETE_TODO,
                            id
                        })
                    })
            }
        })
}

export const changeStatus = (status, id) => (dispatch, getState) => {
    return localForage.getItem('todos')
        .then(todos => {
            const mappedTodos = todos.map(todo => todo.id === id 
                ? {...todo, status}
                : todo)
            localForage.setItem('todos', mappedTodos)
                .then(() => {
                    dispatch({ 
                        type: CHANGE_STATUS,
                        status
                    })
                })
        })
}

export const changeInputValue = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value,
})

export const todoStatuses = {
    COMPLETED: 'completed',
    NOT_COMPLETED: 'not-completed'
}

const todoActions = {
    addTodo, deleteTodo, changeStatus, changeInputValue, fetchTodos
}
export default todoActions


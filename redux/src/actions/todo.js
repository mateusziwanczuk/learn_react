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

export const changeStatus = (status, id) => ({
    type: CHANGE_STATUS,
    status,
    id
})

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id
})

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


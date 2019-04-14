export const ADD_TODO = 'ADD_TODO'
export const CHANGE_STATUS = 'CHANGE_STATUS'
export const DELETE_TODO = 'DELETE_TODO'
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE'

let lastTodoId = 0;

export const addTodo = () => ({
    type: ADD_TODO,
    id: lastTodoId++
})

export const changeStatus = (status, id) => ({
    type: CHANGE_STATUS,
    status,
    id
})

export const deleteTodo = (text, id) => ({
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
    addTodo, deleteTodo, changeStatus, changeInputValue
}
export default todoActions


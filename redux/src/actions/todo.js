export const ADD_TODO = 'ADD_TODO'
export const CHANGE_STATUS = 'CHANGE_STATUS'
export const DELETE_TODO = 'DELETE_TODO'
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE'

export const addTodo = () => ({
    type: ADD_TODO
})

export const changeStatus = () => ({
    type: CHANGE_STATUS
})

export const deleteTodo = (amount) => ({
    type: DELETE_TODO,
    amount
})

export const changeInputValue = () => ({
    type: CHANGE_INPUT_VALUE
})
import localForage from 'localforage'

export const ADD_TODO = 'ADD_TODO'
export const CHANGE_STATUS = 'CHANGE_STATUS'
export const DELETE_TODO = 'DELETE_TODO'
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE'

// export const addTodo = () => {
//     return {
//         type: ADD_TODO,
//         id: Date.now()
//     }
// }

const addTodo = () => {
const todo = {
    type: ADD_TODO,
    id: Date.now()
    }
    return localForage.getItem('todos').then(todos => {
        if (todos) {
            localForage.setItem('todos', [...todos, todo])
        } else {
            localForage.setItem('todos', [todo])
        }
        return todo
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
    addTodo, deleteTodo, changeStatus, changeInputValue
}
export default todoActions


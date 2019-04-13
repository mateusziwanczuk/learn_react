import { ADD_TODO, CHANGE_STATUS, DELETE_TODO, CHANGE_INPUT_VALUE } from '../actions/todo'

const todoStatuses = {
    COMPLETED: 'completed',
    NOT_COMPLETED: 'not-completed'
}

const initialState = {
    inputValue: '',
    todos: [{
        id: null, 
        text: '', 
        status: todoStatuses.NOT_COMPLETED
    }]
}

export default function todoReducer(state = initialState, action) {
    switch(action.type){
       case ADD_TODO: { 
        return {
            ...state,
            todos: [...state.todos, {
                id: action.id,
                text: action.text,
                status: todoStatuses.NOT_COMPLETED
            }]
        }
       }
       case CHANGE_STATUS: {
        return {
            ...state,
            todos: state.todos
                .map(todo => todo.id === action.id 
                    ? {...todo, status: action.status} 
                    : todo)
        }
       }
       case DELETE_TODO: { 
        return {
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.id)
        }
       }
       case CHANGE_INPUT_VALUE: { /* props: text */
        return {
            ...state
        }
       }
        default: {
            return state
        }
    }
}
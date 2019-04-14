import { todoStatuses, ADD_TODO, CHANGE_STATUS, DELETE_TODO, CHANGE_INPUT_VALUE } from '../actions/todo'

const initialState = {
    inputValue: '',
    todos: []
}

export default function todoReducer(state = initialState, action) {
    switch(action.type){
       case ADD_TODO: { 
        return {
            ...state,
            todos: [...state.todos, {
                id: action.id,
                text: state.inputValue,
                status: todoStatuses.NOT_COMPLETED
            }],
            inputValue: ''
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
           console.log(action)
        return {
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.id)
        }
       }
       case CHANGE_INPUT_VALUE: { 
        return {
            ...state,
            inputValue: action.value
        }
       }
        default: {
            return state
        }
    }
}
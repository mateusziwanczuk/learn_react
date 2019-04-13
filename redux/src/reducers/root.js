import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import animationReducer from './animationReducer'
import todoReducer from './todoReducer'

export default combineReducers({
    counter: counterReducer,
    animation: animationReducer,
    todo: todoReducer
})
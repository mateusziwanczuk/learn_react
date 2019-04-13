import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import animationReducer from './animationReducer'

export default combineReducers({
    counter: counterReducer,
    animation: animationReducer
})
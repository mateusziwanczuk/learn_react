import { combineReducers } from 'redux'
import counterReducer from './counterReducer'

return combineReducers({
    counter: counterReducer
})
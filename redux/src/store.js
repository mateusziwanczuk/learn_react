import { createStore } from 'redux'
import rootReducer from './reducers/root'

export default function configureStore(){
    return createStore(rootReducer)
}
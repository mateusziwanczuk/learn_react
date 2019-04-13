import {INCREMENT, DECREMENT, AMOUNT_CHANGE, CHANGE_BY_AMOUNT} from '../actions/counter'

const initialState = {
    count: 0,
    inputValue: null
}
export default function counterReducer(state = initialState, action) {
    switch(action.type){
        case INCREMENT: {
            return {
                ...state,
                count: state.count + 1
            }
        }
        case DECREMENT: {
            return {
                ...state,
                count: state.count - 1
            }
        }
        case AMOUNT_CHANGE: {
            return {
                ...state,
                inputValue: parseInt(action.amount)
            }
        }
        case CHANGE_BY_AMOUNT: {
            return {
                ...state,
                count: state.count + state.inputValue
            }
        }
        default: {
            return state
        }
    }
}
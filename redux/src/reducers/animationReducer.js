import {CHANGE_ROTATION} from '../actions/animation'

const initialState = {
    direction: 'right'
}

export default function counterReducer(state = initialState, action) {
    switch(action.type){
        case CHANGE_ROTATION: {
            return {
                ...state,
                direction: state.direction === 'left' ? 'right' : 'left'
            }
        }
        default: {
            return state
        }
    }
}
// Here I export the reducer I want to use. Still the reducer is just a function.

const initialState = {
 counter: 0
}
// it reflect initial state for that reducer

const reducer = (state = initialState, action) => {
    return state;
}

export default reducer
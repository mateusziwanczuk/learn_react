export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const AMOUNT_CHANGE = 'AMOUNT_CHANGE'
export const CHANGE_BY_AMOUNT = 'CHANGE_BY_AMOUNT'

export const increment = () => ({
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})

export const amountChange = (amount) => ({
    type: AMOUNT_CHANGE,
    amount
})

export const changeByAmount = () => ({
    type: CHANGE_BY_AMOUNT
})
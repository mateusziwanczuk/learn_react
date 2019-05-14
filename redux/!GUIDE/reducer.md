App => /src => /reducers

Funkcja 'reducer' pełni rolę obiektu 'store'. Jako, że jest to funkcja, można ją użyć jako callback, który 'store' uruchomi w momencie, gdy zgłosimy akcję. Funkcja przyjmuje dwa parametry: state i action. 

1. Wywołanie akcji ->

    2. Obiekt store wywołuje funkcję reducer, przekazując aktualny stan oraz akcję ->

        3. Reducer sprawdza typ akcji i zwraca nową wersję obiektu stanu.

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
                    default: {
                        return state
                    }
                }
            }

        Typ akcji INCREMENT zwraca nowy obiekt stanu ze zwiększonym atrybutem counter.

        Typ akcji DECREMENT zwraca nowy obiekt stanu ze zmniejszonym atrybutem counter.

        ! Stan musi być zawsze niezmienny!!! Dlatego zwracamy nowy obiekt stanu:

            return {
                ...state,
                count: state.count + 1
            }
import React from 'react'
import Lily from './Lily'

// ### Ćwiczenie 6 
// Stwórz w komponencie `<App />` komponent `<Garden />`. `<Garden />` powinien przyjmować następujące propsy:
//   -  rose
//   -  lily
//   -  gardenia
//   -  sunflower
//   -  isWinter

// Wszystkie propsy **oprócz** `isWinter` powinny być obiektem:
// ```
// {
//    name: nazwa_kwiata // string
//    height: wysokosc // number
// }
// ```

// `isWinter` powinien być booleanem

// Dla każdego kwiatowego propsa stwórz komponent. Każdy z tych komponentów powinien przyjmować propsa `flower`, który wyświetli nazwę kwiata i jego wysokość podaną w centymetrach

// `<Garden />` powinien wyświetlać kwiaty tylko w momencie kiedy `isWinter` jest `false`

// ***Zastanów się jakby można zrefaktoryzować kod***

const Garden = (props) => {
  return props.flowers.map(flower => <Lily name={flower.name} height={flower.height} />)
}

const flowers = [
  {
    name: 'rose',
    height: 35
  },
  {
    name: 'lily',
    height: 35
  },
  {
    name: 'gardenia',
    height: 35
  },
  {
    name: 'sunflower',
    height: 35
  }
]

const App = () => {
  return (
    <Garden flowers={flowers} isWinter={false} />
  )
}

export default App
import React from 'react'
import World from './World'

// ### Ćwiczenie 8
// W komponencie App stwórz funkcję która wyświetli alert z Hello World. Następnie w App  stwórz komponent 
// World, który przyjmie deklarację tej funkcji jako props. W World stwórz komponent Hello, który również 
// przyjmie deklaracje tej funkcji jako prop i który renderuje button po kliknięciu w button powinniśmy zobaczyć 
// alert z tekstem Hello world.

const showAlert = () => {
  alert('Hello World')
}

const App = () => {
  return (
    <World showAlertApp={showAlert} />
  )
}

export default App
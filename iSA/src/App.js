import React from 'react';
import Name from './Name';
import User from './User';

// ### Ćwiczenie 4 
// Stwórz w komponencie App komponent User. User powinien przyjmować propsa name i przekazywać go dalej do komponentu Welcome, który powinien wyświetlić tekst Hello + name.

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Name />
      <User name="Jan" />
    </div>
  )
}

export default App

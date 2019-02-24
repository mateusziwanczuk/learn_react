import React from 'react';
import Name from './Name';
import User from './User';

// ### Ćwiczenie 3 
// Stwórz komponent `<User />` który przyjmie props `name`. Następnie wyrenderuj otrzymaną w propsie wartość

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

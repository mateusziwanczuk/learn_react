import React from 'react';
import User from './User';

// ### Ćwiczenie 5 
// Stwórz w komponencie App komponent User. User powinien przyjmować propsy name, age, occupation. Stwórz komponent dla każdego z nich i wyświetl go tylko w momencie kiedy dany prop jest obecny.

const App = (props) => {
  return (
    <div>
      <User name="Mateusz" age={24} occupation="student" />
    </div>
  )
}

export default App

import React from 'react';
import Name from './Name';

// ### Ćwiczenie 2
// Stwórz komponent `<Name />`, który będzie odpowiedzialny za wyświetlanie dowolnego imienia. Następnie stwórz komponent `<App />` w którym umieścisz wygenerowany komponent `<Name />`

// Spróbuj przenieść `<Name />` do innego pliku i zaimportować dany plik do `<App />`


const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Name />
    </div>
  )
}

export default App

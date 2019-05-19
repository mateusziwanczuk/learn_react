import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux'
import configureStore from './store.js'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
    <ReduxProvider store={ configureStore() }>
        <App />
    </ReduxProvider>
), document.getElementById('root'));

    // Renderowanie: Aby Redux spełniał swoje funkcje, należy owinąć dany komponent 
    // Providerem dostarczanym przez moduł react-redux. Jako parametr przekazujemy mu utworzony wcześniej obiekt store.

serviceWorker.unregister();

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

serviceWorker.unregister();

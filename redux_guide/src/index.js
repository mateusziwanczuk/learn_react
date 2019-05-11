import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
    // Provider is a helper component which allows us to inject our store into the react components. 
import reducer from './store/reducer'

const store = createStore(reducer);
    // creating store. Store is in a constant named store
    // when add reducer to createStore() we're creating a store
        // successfully with our own reducer.

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>, 
    document.getElementById('root'));

// Here we mount our app component to the dom, so creating the store here makes a lot of sense. 

serviceWorker.unregister();

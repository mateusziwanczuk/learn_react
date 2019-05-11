import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux'
import reducer from './store/reducer'

const store = createStore(reducer);
// creating store. Store is in a constant named store
// when add reducer to createStore() we're creating a store
    // successfully with our own reducer.

ReactDOM.render(<App />, document.getElementById('root'));
// Here we mount our app component to the dom, so creating the store 
// here makes a lot of sense. 

serviceWorker.unregister();

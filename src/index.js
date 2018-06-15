import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'
import initialState from './store/initialState'
import appReducer from './store/reducers'

const store = createStore(appReducer,initialState)

console.log("hi", store.getState())

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

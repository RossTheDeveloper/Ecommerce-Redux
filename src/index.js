import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import initialState from './store/initialState'
import C from './store/constants'
import storeFactory from './store'

const store = storeFactory(initialState)




console.log("hi", store.getState())


store.dispatch({
  type:C.ADD_TO_CART,
  payload:{syrup:2}
})

console.log("bye", store.getState())


store.dispatch({
  type:C.ADD_TO_CART,
  payload:{syrup:10}
})

console.log("bye2", store.getState())


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

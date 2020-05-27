import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/'; // you could point specifically to index however it automatically finds it

import * as serviceWorker from './serviceWorker';

const middlewares =[thunk];

const store = createStore(rootReducer,applyMiddleware(...middlewares));

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  //  </React.StrictMode> 
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

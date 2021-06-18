import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import rootReducer from './reducers/orders'
import App from './App';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

// import './index.css';
// import reportWebVitals from './reportWebVitals';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import orders from './reducers/orders';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    orders
})

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;

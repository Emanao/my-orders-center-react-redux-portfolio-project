import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import orders from './reducers/orders';
import notes from './reducers/notes'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    orders,
    notes
})

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;

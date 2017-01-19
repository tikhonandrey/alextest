import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducer';
import generateId from '../middlewares/generateId';
import api from '../middlewares/api';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = applyMiddleware(
    thunk,
    generateId,
    api,
    // createLogger()
);
const store = createStore(reducer, {}, composeEnhancers(enhancer));

window.store = store;

export default store;
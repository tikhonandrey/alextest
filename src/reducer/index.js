import { combineReducers } from 'redux';
import products from './products';
import { routerReducer as routing } from 'react-router-redux';
import username from './user';
import basket from './basket';

export default combineReducers({
    routing,
    products,
    basket,
    username
})
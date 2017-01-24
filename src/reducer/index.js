import { combineReducers } from 'redux'
import products from './products'
import { routerReducer as routing } from 'react-router-redux';
import username from './user'
import basket from './basket'
import {authStateReducer as auth} from "redux-auth";

export default combineReducers({
    auth,
    routing,
    products,
    basket,
    username
})
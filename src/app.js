import React from 'react'
import { render } from 'react-dom'
import routes from './routes'

render(routes, document.getElementById('approot'));

//todo XXX ****************************** test ******************************
import store from './store/index';
import {loadProducts} from './actions/products';

store.dispatch(loadProducts());
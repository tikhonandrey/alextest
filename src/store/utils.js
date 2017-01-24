import store from './index'
import {SERVER_API} from '../constants'
import {configure} from 'redux-auth'

export function authorize(url) {
    return store.getState().user
}

//****************************** redux-auth  ******************************
export function renderApp({cookies, isServer, currentLocation} = {}) {
    //todo настройка
    return store.dispatch(
        configure(
            {apiUrl: SERVER_API + 'user'},
            {isServer, cookies, currentLocation}
    ))
        
}
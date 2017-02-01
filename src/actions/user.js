import { push } from 'react-router-redux';
import {SERVER_API} from '../constants';

export const SET_USER_NAME = 'SET_USER_NAME';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export function setUserName(name) {
    return {
        type: SET_USER_NAME,
        payload: name
    }
}
export function logOut() {
    return {
        type: LOGOUT_USER
    }
}
export const setUserNameAndGoShoping =(name)=>(dispatch, getState)=> {

    dispatch( setUserName(name) );

    dispatch( push('/products') );
    
};


const loginUserCallback = (next, action, response)=>{

    if(response.name && response.name != '') {
        next({
            ...action,
            response,
            type: LOGIN_USER + 'SUCCESS'
        });
        next( push('/products') );
    }else{
        next({
            ...action,
            response,
            type: LOGIN_USER + 'FAIL'
        });
    }
};


export const signIn =(form)=>(dispatch, getState)=> {

    dispatch({
        type: LOGIN_USER,
        callAPI: SERVER_API + 'sign_in',
        payload: {
            method: 'post',
            data: form,
            callback: loginUserCallback
        }
    });

};
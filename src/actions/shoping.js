import {SERVER_API} from '../constants';

export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const DELETE_FROM_BASKET = 'DELETE_FROM_BASKET';

export const loadProducts=()=>(dispatch, getState)=>{
    const products = getState().products;

    if( !products.get('loaded') && !products.get('loading')) {
        dispatch({
            type: LOAD_PRODUCTS,
            callAPI: SERVER_API + 'product'
        })
    }
};

export function addToBasket(productId) {

    return {
        type: ADD_TO_BASKET,
        payload: productId
    }
}
export function deleteFromBasket(productId) {
    return {
        type: DELETE_FROM_BASKET,
        payload: productId
    }
}
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const DELETE_FROM_BASKET = 'DELETE_FROM_BASKET';

export function loadProducts() {
    return {
        type: LOAD_PRODUCTS,
        callAPI: 'http://localhost:3000/api/product'
    }
}

export function addToBasket(product) {

    return {
        type: ADD_TO_BASKET,
        payload: product,
        generateId: true
    }
}
export function deleteFromBasket(basketId) {
    return {
        type: DELETE_FROM_BASKET,
        payload: basketId
    }
}
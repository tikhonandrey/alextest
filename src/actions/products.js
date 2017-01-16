export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const ADD_TO_BASKET = 'ADD_TO_BASKET';

export function loadProducts() {
    return {
        type: LOAD_PRODUCTS,
        callAPI: 'http://localhost:3000/api/product'
    }
}

export function addToBasket(productId) {
    return {
        type: ADD_TO_BASKET,
        payload: productId
    }
}
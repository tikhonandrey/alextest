export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';

export function loadProducts() {
    return {
        type: LOAD_PRODUCTS,
        callAPI: 'http://localhost:3000/api/product'
    }
}

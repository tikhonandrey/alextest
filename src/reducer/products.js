import {
    LOAD_PRODUCTS,
} from '../actions/shoping';
import { arrayToMap, ReducerState } from '../utils';
import { Record, Map, List } from 'immutable';

const ProductModel = Record({
    id: null,
    title: null,
    cost: null,
    img:null
});

const defaultState = new ReducerState({
    entities: arrayToMap([], ProductModel),
    loading: false
});

export default (products = defaultState, action) => {
    const { type, payload, response, error, generatedId } = action;

    switch (type) {
        case LOAD_PRODUCTS + 'START':
            return products.set('loading', true);

        case LOAD_PRODUCTS + 'SUCCESS':
            return products
                .set('entities', arrayToMap(response, ProductModel))
                .set('loading', false)

    }

    return products
}
import {
    ADD_TO_BASKET,
    DELETE_FROM_BASKET
} from '../actions/shoping';
import { arrayToMap } from '../utils';
import { Record, Map, List } from 'immutable';

const BasketModel = Record({
    product: null,
    count:null
});

const defaultState = arrayToMap([], BasketModel);

export default (basket = defaultState, action) => {
    const { type, payload, response, error, generatedId } = action;

    switch (type) {
        case ADD_TO_BASKET:
            let count = basket.getIn([payload,'count']);

            if( count ) {
                return basket.setIn([payload,'count'], ++count);
            }else{
                return basket.set(payload, new BasketModel({
                    product: payload,
                    count:1
                }));
            }

        case DELETE_FROM_BASKET:
            return basket.delete(payload )
              

    }

    return basket
}
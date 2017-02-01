import {
    ADD_TO_BASKET,
    DELETE_FROM_BASKET
} from '../actions/shoping';
import { arrayToMap, getPersistedState, persistState } from '../utils';
import { Record, Map, List } from 'immutable';

const BasketModel = Record({
    product: null,
    count:0
});
const defaultStateCreator = Record({
    entities: arrayToMap([], BasketModel),
    total: 0   
});
const defaultState = getPersistedState('basket') || defaultStateCreator();

export default (basket = defaultState, action) => {
    const { type, payload, response, error, generatedId } = action;

    switch (type) {
        case ADD_TO_BASKET:
            let id = payload.id;
            if( basket.entities.has(id) ) {
                return basket
                        .updateIn(['entities', id, 'count'], value=>value + 1)
                        .update('total', value=>value + 1);
            }else{
                return basket
                    .setIn(['entities', id], new BasketModel({
                        product: payload,
                        count: 1
                    }))
                    .update('total', value=>value + 1);
            }

        case DELETE_FROM_BASKET:
            if(basket.entities.has(payload)){
                let count = basket.getIn(['entities', payload, 'count']);
                if( count != 1 ){
                    return basket
                        .updateIn(['entities', payload, 'count'], value=>value-1)
                        .update('total', value=>value - 1);
                }else{
                    return basket
                        .deleteIn(['entities', payload])
                        .update('total', value=>value - 1);
                }
            }


    }

    return basket
}
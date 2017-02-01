import {
    ADD_TO_BASKET,
    DELETE_FROM_BASKET
} from '../actions/shoping';
import {
    arrayToMap,sequenceToMap,
    getStateFromLocalStorage,
    saveStateToLocalStorage } from '../utils';
import { Record, Map, List, fromJS } from 'immutable';

const BasketModel = Record({
    product: null,
    count:0
});

const localStorageKey = 'basket';
export class PersistRecord extends Record({
    entities: arrayToMap([], BasketModel),
    total: 0
}) {
    persistState(){
        saveStateToLocalStorage(localStorageKey, this.toJS());
        return this;
    }
    getPersistedState(key) {
        const state = getStateFromLocalStorage(key);

        if(state){
            return this
                .mergeIn(['entities'], sequenceToMap(state.entities, BasketModel))
                .set('total', state.total)
        }else{
            return this;
        }
    }

}
const defaultState = new PersistRecord().getPersistedState(localStorageKey);

export default (basket = defaultState, action) => {
    const { type, payload, response, error, generatedId } = action;

    switch (type) {
        case ADD_TO_BASKET:
            let id = payload.id;
            if( basket.entities.has(id) ) {
                return basket
                        .updateIn(['entities', id, 'count'], value=>value + 1)
                        .update('total', value=>value + 1)
                        .persistState();
            }else{
                return basket
                    .setIn(['entities', id], new BasketModel({
                        product: payload,
                        count: 1
                    }))
                    .update('total', value=>value + 1)
                    .persistState();
            }

        case DELETE_FROM_BASKET:
            if(basket.entities.has(payload)){
                let count = basket.getIn(['entities', payload, 'count']);
                if( count != 1 ){
                    return basket
                        .updateIn(['entities', payload, 'count'], value=>value-1)
                        .update('total', value=>value - 1)
                        .persistState();
                }else{
                    return basket
                        .deleteIn(['entities', payload])
                        .update('total', value=>value - 1)
                        .persistState();
                }
            }


    }

    return basket
}
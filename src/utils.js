import { Map, Record, fromJS } from 'immutable'
import _values from 'lodash/values';

export function arrayToMap(arr, Model) {
    return arr.reduce((acc, el) => {
        const immutableElement = Model ? new Model(el) : fromJS(el)
        return acc.set(el.id, immutableElement)
    }, new Map({}))
}

export function sequenceToMap(seq, Model) {
    return _values(seq).reduce((acc, el) => {
        const immutableElement = Model ? new Model(el) : fromJS(el)
        return acc.set(el.product.id, immutableElement)
    }, new Map({}))
}

export const ReducerState = Record({
    entities: new Map({}),
    loading: false,
    loaded: false
});


export function saveStateToLocalStorage(key, state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(key, serializedState);
    } catch (err) {
        // Ignore write errors.
    }
}

export function getStateFromLocalStorage(key) {
    try {
        const serializedState = localStorage.getItem(key);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
}
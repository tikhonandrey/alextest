import { Map, Record, fromJS } from 'immutable'

export function arrayToMap(arr, Model) {
    return arr.reduce((acc, el) => {
        const immutableElement = Model ? new Model(el) : fromJS(el)
        return acc.set(el.id, immutableElement)
    }, new Map({}))
}

export const ReducerState = Record({
    entities: new Map({}),
    loading: false,
    loaded: false
})



//todo JSON?
export function persistState(key, state) {
    window.localStorage.setItem(key, state)
}

export function getPersistedState(key) {
    const data = window.localStorage.getItem(key);

    if(data){
        console.log('data',data);
    }else{

    }

    return ;
}
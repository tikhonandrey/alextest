import jquery from 'jquery'

export default store => next => action => {
    const {
        callAPI,
        payload={},
        type,
        ...rest
    } = action;

    if (!callAPI) return next(action);

    next({
        ...rest,
        type: type + 'START'
    });

    const {
        method='get',
        data=null,
        callback=(next, action, response) => {
            next({...rest, response, type: type + 'SUCCESS'})
        }
    } = payload;

    //url, data, callback, type
    jquery[method.toLowerCase()](callAPI, data )
        .done( callback.bind(this, next, action) )
        .fail(error => {
            next({...rest, error, type: type + 'FAIL'})
        })
}
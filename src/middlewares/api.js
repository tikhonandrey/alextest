import jquery from 'jquery'

export default store => next => action => {
    const {
        callAPI,
        type,
        ...rest
    } = action;

    if (!callAPI) return next(action);

    next({
        ...rest,
        type: type + 'START'
    });

    jquery.get(callAPI)
        .done(response => {
            next({...rest, response, type: type + 'SUCCESS'})
        })
        .fail(error => {
            next({...rest, error, type: type + 'FAIL'})
        })
}
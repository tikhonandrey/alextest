import _uuid from 'lodash-uuid';

export default store => next => action => {
    const {
        generateId,
        ...rest
    } = action;

    if (!generateId) return next(action);

    next({
        ...rest,
        generatedId: _uuid()
    })
}
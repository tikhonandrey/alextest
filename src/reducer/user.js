import {
    SET_USER_NAME
} from '../actions/user';

export default (username = 'User', action) => {
    const { type, payload} = action;

    switch (type) {
        case SET_USER_NAME:
            return payload;

    }

    return username;
}
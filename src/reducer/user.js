import {
    SET_USER_NAME
} from '../actions/user';

export default (username = '', action) => {
    const { type, payload} = action;

    switch (type) {
        case SET_USER_NAME:
            return payload;

    }

    return username;
}
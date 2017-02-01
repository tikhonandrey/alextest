import {
    SET_USER_NAME,
    LOGOUT_USER,
    LOGIN_USER
} from '../actions/user';

export default (username = '', action) => {
    const { type, payload, response} = action;

    switch (type) {
        case SET_USER_NAME:
            return payload;
        case LOGOUT_USER:
            return '';
        case LOGIN_USER + 'SUCCESS':
            return response.name;

    }

    return username;
}
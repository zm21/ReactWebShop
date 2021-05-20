import * as types from './types'

const initState = {
    data: false
}

export const authReducer = (state = initState, action) => {

    switch (action.type) {
        case types.AUTH_LOGIN:
            return {
                ...state,
                data: true
            };
            break;
        case types.AUTH_LOGOUT:
            return {
                ...state,
                data: false
            };
            break;
    }
    return state;
}
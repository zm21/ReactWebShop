import * as types from './types'

const initState = {
    loading: false,
    errors:{

    }
}

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case types.LOGIN_STARTED:
            return {
                ...state,
                loading: true,
                errors: {}
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                errors: {}
            };
        case types.LOGIN_FAILED:
            return {
                ...state,
                loading: false,
                errors: action.errors
            };
    }
    return state;
}
import * as actionTypes from '../types';

const initialState = {
    loading: 'none',
    user: {},
    error: '',
    open: false
}

export const loginReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.LOGIN_REQUEST:
            return {
                ...state,
                loading: 'block',
            }

        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loading: 'none',
                user: action.payload,
            }
        case actionTypes.LOGIN_FAILED:
            return {
                ...state,
                loading: 'none',
                open: true,
                error: action.payload,
            }
        case actionTypes.CLOSE_MESSAGE:
            return {
                ...state,
                loading: 'none',
                open: false,
            }
        default:
            return state;
    }
}
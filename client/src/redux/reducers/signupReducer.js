import * as actionTypes from '../types';

const initialState = {
    loading: 'none',
    user: {},
    error: '',
    open: false
}

export const signupReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.SIGN_UP_REQUEST:
            return {
                ...state,
                loading: 'block',
            }

        case actionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                loading: 'none',
                user: action.payload,
            }
        case actionTypes.SIGN_UP_FAILED:
            return {
                ...state,
                loading: 'none',
                open: true,
                error: action.error,
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
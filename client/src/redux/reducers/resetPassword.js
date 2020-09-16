import * as actionTypes from '../types';

const initialState = {
    open: false,
    loading: 'none',
    error: '',
    user: {},
    message: ''

}


export const resetPasswordRequest = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.RESET_ATTEMPT_REQUEST:
            return {
                ...state,
                loading: 'block',
            }

        case actionTypes.RESET_ATTEMPT_SUCCESS:
            return {
                ...state,
                loading: 'none',
                user: action.payload,
            }
        case actionTypes.RESET_ATTEMPT_FAILURE:
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


export const resetPasswordDone = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.RESET_PASSWORD_REQUEST:
            return {
                ...state,
                loading: 'block',
            }

        case actionTypes.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: 'none',
                message: action.payload,
            }
        case actionTypes.RESET_PASSWORD_FAILURE:
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





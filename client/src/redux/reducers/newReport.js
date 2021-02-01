import * as actionTypes from '../types';

const initialState = {
    loading: 'none',
    report: {},
    error: '',
    open: false
}

export const newReportReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.NEW_REPORT_FAILED:
            return {
                ...state,
                loading: 'none',
                open: true,
                error: action.payload,
            }

        case actionTypes.NEW_REPORT_SUCCESS:
            return {
                ...state,
                loading: 'none',
                reports: action.payload
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
import * as actionTypes from '../types';

const initialState = {
    loading: 'none',
    error: '',
    reports: []
}

export const allReportsReducer = (state = initialState, action)=>{

    switch (action.type) {
        case actionTypes.GET_ALL_REPORTS_STARTING:
        return {...state,loading: 'block'}

        case actionTypes.GET_ALL_REPORTS_SUCCESS: 
        return {...state, reports: action.payload}

        case actionTypes.GET_ALL_REPORTS_FAILED: 
        return {...state, error: action.error}
        
        case actionTypes.GET_ALL_REPORTS_ENDING: 
        return {...state}

        default:
            return state;
    }

}
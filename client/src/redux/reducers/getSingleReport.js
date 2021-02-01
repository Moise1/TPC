import * as actionTypes from '../types';


const initialState = {
    loading: 'none',
    result: {},
    error: ''
}
export const singleReportReducer = (state = initialState, action)=>{

    switch (action.type) {
        case actionTypes.GET_SINGLE_REPORT_STARTING:
        return {...state, loading: 'block'}

        case actionTypes.GET_SINGLE_REPORT_SUCCESS: 
        return {...state, result: action.payload}

        case actionTypes.GET_SINGLE_REPORT_FAILED: 
        return {...state, error: action.error}
        
        case actionTypes.GET_SINGLE_REPORT_ENDING: 
        return {...state}

        default:
            return state;
    }

}
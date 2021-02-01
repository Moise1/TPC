import axios from 'axios';
import * as actionTypes from '../types';

export const getAllReports = () => async dispatch => {

    try {
        
        dispatch({type: actionTypes.GET_ALL_REPORTS_STARTING})
        const res =  await axios.get('/new-report');
        dispatch({type: actionTypes.GET_ALL_REPORTS_SUCCESS, payload: res.data})
        dispatch({type: actionTypes.GET_ALL_REPORTS_ENDING});

    } catch (err) {
        if(err.response){
            const errorMessage = await err.response.data.error
            dispatch({type: actionTypes.GET_ALL_REPORTS_FAILED, error: errorMessage});
        }
    }
}

export const getSingleReport = (id) => async dispatch =>{

    try {
        dispatch({type: actionTypes.GET_SINGLE_REPORT_STARTING});
        const res = await axios.get(`/get-report/${id}`);
        dispatch({type: actionTypes.GET_SINGLE_REPORT_SUCCESS, payload: res.data});
        dispatch({type: actionTypes.GET_SINGLE_REPORT_ENDING});

    } catch (err) {
        if(err.response){
            const errorMessage = await err.response.data.error
            dispatch({type: actionTypes.GET_SINGLE_REPORT_FAILED, error: errorMessage});
        }
    }
}
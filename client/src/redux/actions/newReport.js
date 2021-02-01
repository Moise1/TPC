import axios from 'axios';
import * as actionTypes from '../types';

export const newReportAction = (newReport) => async (dispatch) => {

    try {
        const result = await axios.post('/new-report',  newReport);
        const { dataValues, message } = await result.data;
        dispatch(newReportSuccess(dataValues))  
    } catch (error) {
        if (error.response) {
            const errorMessage = await error.response.data.error;
            dispatch(newReportFailed(errorMessage));
        } else {
            dispatch(newReportFailed('Network Error'));
        }
    }
}

export const newReportRequest = () => {return {type: actionTypes.NEW_REPORT_REQUEST}}

export const newReportFailed = error => {
    return {
        type: actionTypes.NEW_REPORT_FAILED,
        error
    }
}

export const newReportSuccess = reportData => {
    return {
        type: actionTypes.NEW_REPORT_SUCCESS,
        payload: reportData
    }
}



export const closeMessage = () => {
    return {
        type: actionTypes.CLOSE_MESSAGE,
    }
}

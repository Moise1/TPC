import * as actionTypes from '../types';
import axios from 'axios';



export const resetEmailOwner = (data, history) => async dispatch => {

    try {
        dispatch(attemptPasswordReset());
        const res =  await axios.post('/request-password-reset', data);
        const result = await res.data;
        dispatch(attemptSuccess(result));
        const { token } = res.data;
        history.push({pathname: `/complete-password-reset-process/${token}`})
    }catch(err){
        if (err.response) {
            const errorMessage = await err.response.data.error;
            dispatch(attemptFailure(errorMessage));
        } else {
            dispatch(attemptFailure('Network Error.'));
        }
    }
}

export const resetPassword = (data, token, history) => async dispatch => {

    try {
        dispatch(requestPasswordReset());
        const res = await axios.put(`/complete-password-reset-process/${token}`, data);
        const {message} = await res.data
       dispatch(resetPasswordSuccess(message))
        history.push({pathname: '/redirect'});
    } catch (err) {
        if (err.response) {
            const errorMessage = await err.response.data.error;
            dispatch(resetPasswordFailure(errorMessage));
        } else {
            dispatch(resetPasswordFailure('Network Error.'));
        }
    }
}


// ATTEMPT PASSWORD RESET
export const attemptPasswordReset = () => {

    return {
        type: actionTypes.RESET_ATTEMPT_REQUEST
    }
}


const attemptSuccess = userData => {
    return {
        type: actionTypes.RESET_ATTEMPT_SUCCESS,
        payload: userData
    }

}

export const attemptFailure = error => {

    return {
        type: actionTypes.RESET_ATTEMPT_FAILURE,
        payload: error
    }
}



// COMPLETE PASSWORD RESET

export const requestPasswordReset = () => {

    return {
        type: actionTypes.RESET_PASSWORD_REQUEST
    }
}


const resetPasswordSuccess = msg => {
    return {
        type: actionTypes.RESET_PASSWORD_SUCCESS,
        payload: msg
    }

}

export const resetPasswordFailure = error => {

    return {
        type: actionTypes.RESET_PASSWORD_FAILURE,
        payload: error
    }
}



export const closeMessage = () => {
    return {
        type: actionTypes.CLOSE_MESSAGE
    }
}



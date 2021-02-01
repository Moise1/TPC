import axios from 'axios';
import * as actionTypes from '../types';

export const loginAction = (data, history) => async (dispatch) => {
    try {
        dispatch(loginRequest());
        const res = await axios.post('/login', data)
        const {message, token} = await res.data;
        localStorage.setItem('token', token);
        dispatch(loginSuccess({data: message, token }));
        history.push({pathname: '/create-report'});
        
    } catch (err) {
        if (err.response) {
            const errorMessage = await err.response.data.error;
            dispatch(loginFailure(errorMessage));
        } else {
            dispatch(loginFailure('Network Error.'));
        }
    }
}

export const loginRequest = () => {
    return {
        type: actionTypes.LOGIN_REQUEST
    }
}

export const loginSuccess = userData => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        payload: userData
    }
}

export const loginFailure = error => {
    return {
        type: actionTypes.LOGIN_FAILED,
        error
    }
}

export const closeMessage = () => {
    return {
        type: actionTypes.CLOSE_MESSAGE,
    }
}




import axios from 'axios';
import * as actionTypes from '../types';

export const signupAction = (data, history) => async (dispatch) => {
    
    try {
        dispatch(signupRequest());
        const res = await axios.post('/signup', data)
        const {dataValues, token} = await res.data.data;
        localStorage.setItem('token', token);
        dispatch(signupSuccess({ data: dataValues, token }));
        history.push({pathname: '/create-report'});

    } catch (err) {
        if (err.response) {
            const errorMessage = await err.response.data.error;
            dispatch(signupFailure(errorMessage));
        } else {
            dispatch(signupFailure('Network Error'));
        }
    }
}

export const signupRequest = () => {
    return {
        type: actionTypes.SIGN_UP_REQUEST
    }
}

export const signupSuccess = userData => {
    return {
        type: actionTypes.SIGN_UP_SUCCESS,
        payload: userData
    }
}

export const signupFailure = error => {
    return {
        type: actionTypes.SIGN_UP_FAILED,
        error
    }
}

export const closeMessage = () => {
    return {
        type: actionTypes.CLOSE_MESSAGE,
    }
}




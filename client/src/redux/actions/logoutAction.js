import axios from 'axios';
import * as actionTypes from '../types';

export const LogoutAction = () =>  dispatch =>{
  axios.get('/logout');
  localStorage.removeItem('token')
  dispatch({type: actionTypes.LOGOUT})
}

import { combineReducers } from 'redux';
import {signupReducer} from './signupReducer';
import {loginReducer} from './loginReducer'
import {resetPasswordRequest, resetPasswordDone} from './resetPassword';

export const rootReducer = combineReducers({
    signup: signupReducer,
    login: loginReducer,
    resetRequest: resetPasswordRequest,
    resetDone: resetPasswordDone
})


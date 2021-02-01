import { combineReducers } from 'redux';
import {signupReducer} from './signupReducer';
import {loginReducer} from './loginReducer'
import {resetPasswordRequest, resetPasswordDone} from './resetPassword';
import {newReportReducer} from './newReport';
import {allReportsReducer} from './getAllReports';
import {singleReportReducer} from './getSingleReport';

export const rootReducer = combineReducers({

    signup: signupReducer,
    login: loginReducer,
    resetRequest: resetPasswordRequest,
    resetDone: resetPasswordDone,
    newReport: newReportReducer,
    allReports: allReportsReducer,
    singleReport: singleReportReducer
    
})


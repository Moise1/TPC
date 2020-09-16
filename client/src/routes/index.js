import React from 'react';
import {Switch, Route } from 'react-router-dom';
import SignUpForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import ResetPasswordRequest from '../components/RequestPasswordReset';
import ResetPassword from '../components/ResetPassword';
import RedirectPage from '../components/RedirectPage';
import NewReport from '../components/NewReport';

export const IndexRoute = props =>{
    return (
        <Switch>
            <Route   path="/" exact component={SignUpForm}/>
            <Route   path="/login" exact  component={LoginForm}/>
            <Route   path="/request-password-reset" exact component={ResetPasswordRequest}/>
            <Route   path="/complete-password-reset-process/:token" exact component={ResetPassword}/>
            <Route   path="/redirect" exact component={RedirectPage}/>
            <Route   path="/new-report" exact component={NewReport}/>
        </Switch>
    )
}



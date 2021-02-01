import React, {useState} from 'react';
import dotenv from 'dotenv';
import clsx from 'clsx';
import {
  Snackbar,
  IconButton,
  CircularProgress,
  SnackbarContent,
  InputAdornment,
  FormControl,
  InputLabel,
  FormHelperText
} from '@material-ui/core';

import '../assets/styles/resetpassword.css';
import { Close, Visibility, VisibilityOff } from '@material-ui/icons'
import { withRouter, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import { resetPasswordData} from '../AuthStateData/resetPwdData';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/resetPassword';
import { CustomStyles,  CustomOutlinedInput } from '../StyledComponents';


const ResetPassword = props => {
  const [userInfo, setUserInfo] = useState({ ...resetPasswordData })
  const classes = CustomStyles();

  const handleChange = (e) => {
    e.persist();
    setUserInfo(userInfo => ({ ...userInfo, [e.target.name]: e.target.value }))
  }

  const handleShowPasswword = () => {
    setUserInfo({ ...userInfo, showPassword: !userInfo.showPassword })
  }
  const handleMouseDownPassword = (e) => {
    e.preventDefault()
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateInput();
    if (!errors) {
      const resetPassword = {
        password: userInfo.password,
        confirmPassword: userInfo.confirmPassword
      }
      const {token} = props.match.params;
      await props.passwordResetDone(resetPassword, token, props.history)
    }
  }

  const validateInput = () => {

    const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    let hasErrors = false;
    const errors = {
      emailError: userInfo.emailError,
      emailErrorStatus: userInfo.emailErrorStatus,
      confirmPasswordError: userInfo.confirmPasswordError,
      confirmPasswordErrorStatus: userInfo.confirmPasswordErrorStatus,
      passwordError: userInfo.passwordError,
      passwordErrorStatus: userInfo.confirmPasswordErrorStatus,
    }

    if (userInfo.password.length < 6) {
      hasErrors = true
      errors.passwordError = 'Password length must be 6 characters.';
      errors.passwordErrorStatus = true;
    }
    if (userInfo.confirmPassword.length < 6) {
      hasErrors = true
      errors.confirmPasswordError = 'Password length must be 6 characters.';
      errors.confirmPasswordErrorStatus = true;
    }

    setUserInfo({
      ...userInfo,
      ...errors
    })
    return hasErrors;
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  };

  return (
    <div className="container login-page mb-5">
      {props.resetDone.loading === 'block' ? (
        <div className="row justify-content-center">
          <CircularProgress
            value={25}
            className="circular-progress" />
        </div>
      ) :
        null}
      <div className="row mt-5 justify-content-center">
        <form action="" className="login-form" onSubmit={handleSubmit}>
          <h3 className="mb-5 text-center">Reset Your Password</h3>
          
          <FormControl className={clsx(classes.resetPasswordFields, classes.textField)}
            variant="outlined"
            error={userInfo.passwordErrorStatus}>
            <InputLabel htmlFor="outlined-adornment-password-1">New Password </InputLabel>

            <CustomOutlinedInput
              id="outlined-adornment-password-1"
              type={userInfo.showPassword ? 'text' : 'password'}
              name="password"
              value={userInfo.password}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowPasswword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end">
                    {userInfo.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={118}

            />
            <FormHelperText>{userInfo.passwordError}</FormHelperText>
          </FormControl>

          <FormControl className={clsx(classes.resetPasswordFields, classes.textField)}
            variant="outlined"
            error={userInfo.passwordErrorStatus}>
            <InputLabel htmlFor="outlined-adornment-password-2">Confirm Password</InputLabel>

            <CustomOutlinedInput
              id="outlined-adornment-password-2"
              type={userInfo.showPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={userInfo.confirmPassword}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowPasswword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end">
                    {userInfo.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={135}

            />
            <FormHelperText>{userInfo.confirmPasswordError}</FormHelperText>
          </FormControl>

          <div className="col-md-12 text-center">
            <Button type="submit" className="btn auth-btn">Reset</Button>
          </div>
        </form>
      </div>

      <div className="row justify-content-center">
        <Link to="/login" className="mt-3 mb-3 forgot-password" replace>Go back to login</Link>
      </div>
      <Snackbar
        className="snackbar"
        open={props.resetDone.open}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        autoHideDuration={6000}
        onClose={handleClose}>

        <SnackbarContent style={{
          backgroundColor: '#E74C3C',
          color: '#fff'
        }}
          action={[
            <IconButton
              key="close"
              color="inherit"
              onClick={props.closeMessage}>
              <Close aria-label="Close" />
            </IconButton>
          ]}
          message={<span id="message-id">{props.resetDone.error}</span>} />
      </Snackbar>
    </div>
  )
}


const mapStateToProps = state =>{
  return {
      resetDone: state.resetDone
  }
}

const mapDispatchToProps = dispatch =>{
  return {
      passwordResetDone: (data, token, history) => dispatch(actions.resetPassword(data, token, history)),
      closeMessage: ()=> dispatch(actions.closeMessage())
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResetPassword))
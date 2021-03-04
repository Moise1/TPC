import React, { useState } from 'react';
import clsx from 'clsx';
import {
  OutlinedInput,
  Snackbar,
  IconButton,
  CircularProgress,
  SnackbarContent,
  InputAdornment,
  FormControl,
  InputLabel,
  FormHelperText
} from '@material-ui/core'
import '../assets/styles/login.css';
import { Close, Visibility, VisibilityOff } from '@material-ui/icons'
import { withRouter, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import { loginData } from '../AuthStateData/loginData'
import validator from 'validator'
import { connect } from 'react-redux';
import * as actions from '../redux/actions/loginAction';
import { CustomTextField, CustomStyles } from '../StyledComponents';

const LoginForm = props => {
  const [userInfo, setUserInfo] = useState({ ...loginData })
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
      const logInUser = {
        email: userInfo.email,
        password: userInfo.password
      }
      await props.loginAction(logInUser, props.history)
    }
  }

  const validateInput = () => {

    const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    let hasErrors = false;
    
    const errors = {
      emailError: userInfo.emailError,
      emailErrorStatus: userInfo.emailErrorStatus,

      passwordError: userInfo.passwordError,
      passwordErrorStatus: userInfo.passwordErrorStatus,
    }

    if (!validator.isEmail(userInfo.email) || !regexEmail.test(userInfo.email)) {
      hasErrors = true
      errors.emailError = 'Email is invalid.';
      errors.emailErrorStatus = true;
    }
    if (userInfo.password.length < 6) {
      hasErrors = true
      errors.passwordError = 'Password length must be 6 characters.';
      errors.passwordErrorStatus = true;
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
      {props.loginState.loading === 'block' ? (
        <div className="circular-progress-container">
          <CircularProgress
            value={25}
            className="circular-progress" />
        </div>
      ) :
        null}
      <div className="row mt-5 justify-content-center">
        <form action="" className="login-form" onSubmit={handleSubmit}>
          <h3 className="mb-5 text-center">Log In</h3>
          <CustomTextField
            className="d-block mb-3 text-input"
            id="email"
            type="text"
            variant="outlined"
            label="Email"
            name="email"
            error={userInfo.emailErrorStatus}
            helperText={userInfo.emailError}
            value={userInfo.email}
            onChange={handleChange}
          />

          <FormControl className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            error={userInfo.passwordErrorStatus}>
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
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
              labelWidth={70}

            />
            <FormHelperText>{userInfo.passwordError}</FormHelperText>
          </FormControl>
          <div className="col-md-12 text-center">
            <Button type="submit" className="btn auth-btn">Log In</Button>
          </div>
        </form>
      </div>

      <p className="mt-3 mb-3 text-center alternative-action"> Don't have an account ? <Link to="/" className="alternate-link" replace>Sign Up</Link></p>
      <div className="row justify-content-center">
        <Link to="/request-password-reset" className="mb-3 forgot-password" replace>Forgot my password</Link>
      </div>
      <Snackbar
        className="snackbar"
        open={props.loginState.open}
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
          message={<span id="message-id">{props.loginState.error}</span>} />
      </Snackbar>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    loginState: state.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: (userData, history) => dispatch(actions.loginAction(userData, history)),
    closeMessage: () => dispatch(actions.closeMessage())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
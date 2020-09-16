import React, { useState } from 'react';
import clsx from 'clsx';
import {
    Snackbar,
    IconButton,
    CircularProgress,
    SnackbarContent,
    InputAdornment,
    FormControl,
    InputLabel,
    OutlinedInput,
    FormHelperText
} from '@material-ui/core'
import { Close, Visibility, VisibilityOff } from '@material-ui/icons'
import '../assets/styles/signup.css'
import { withRouter, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import * as actions from '../redux/actions/signupAction';
import { signupData } from '../AuthStateData/signupData'
import validator from 'validator';
import { CustomStyles, CustomTextField } from '../StyledComponents'


const SignUpForm = props => {
    const [userInfo, setUserInfo] = useState({ ...signupData })
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
            const createUser = {
                first_name: userInfo.first_name,
                last_name: userInfo.last_name,
                email: userInfo.email,
                password: userInfo.password
            }
            await props.signupAction(createUser, props.history)
        }
    }

    const validateInput = () => {
        let hasErrors = false
        const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

        const errors = {
            firstNameError: userInfo.firstNameError,
            firstNameErrorStatus: userInfo.firstNameErrorStatus,
            last_nameError: userInfo.last_nameError,
            last_nameErrorStatus: userInfo.last_nameErrorStatus,
            emailNameError: userInfo.emailNameError,
            emailNameErrorStatus: userInfo.emailNameErrorStatus,
            passwordError: userInfo.passwordError,
            passwordErrorStatus: userInfo.passwordErrorStatus,
        }
        if (!userInfo.first_name) {
            hasErrors = true
            errors.firstNameError = 'First name is required.';
            errors.firstNameErrorStatus = true;
        }
        if (!userInfo.last_name) {
            hasErrors = true
            errors.last_nameError = "Last name is required";
            errors.last_nameErrorStatus = true;
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
        <div className="container signup-page mb-5">
            {props.signupState.loading === 'block' ? (
                <div className="justify-content-center">
                    <CircularProgress
                        value={25}
                        className="circular-progress" />
                </div>
            ) :
                null}
            <div className="row mt-5 justify-content-center">
                <form action="" className="signup-form" onSubmit={handleSubmit}>
                    <h3 className="mb-5 text-center">Create Account</h3>
                    <CustomTextField
                        className="d-block mb-3"
                        id="first-name"
                        type="text"
                        name="first_name"
                        value={userInfo.first_name}
                        variant="outlined"
                        label="First Name"
                        inputProps={{
                            autoComplete: "off"
                        }}
                        error={userInfo.firstNameErrorStatus}
                        helperText={userInfo.firstNameError}
                        onChange={handleChange} />

                    <CustomTextField
                        className="d-block mb-3 text-input"
                        id="last-name"
                        type="text"
                        value={userInfo.last_name}
                        variant="outlined"
                        name="last_name"
                        label="Last Name"
                        inputProps={{
                            autoComplete: "off"
                        }}
                        error={userInfo.last_nameErrorStatus}
                        helperText={userInfo.last_nameError}
                        onChange={handleChange} />

                    <CustomTextField
                        className="d-block mb-3 text-input"
                        id="email"
                        type="text"
                        value={userInfo.email}
                        variant="outlined"
                        name="email"
                        label="Email"
                        inputProps={{
                            autoComplete: "off"
                        }}
                        autoComplete="false"
                        error={userInfo.emailErrorStatus}
                        helperText={userInfo.emailError}
                        onChange={handleChange} />

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
                        <Button type="submit" className="auth-btn">Sign Up</Button>
                    </div>
                    <p className="mt-2 text-center alternative-action"> Already have an account ? <Link to="/login" className="alternate-link" replace>Login</Link></p>
                </form>
            </div>
            <Snackbar
                className="snackbar"
                open={props.signupState.open}
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
                    message={<span id="message-id">{props.signupState.error}</span>}

                />
            </Snackbar>


        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        signupState: state.signup
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signupAction: (userData, history) => dispatch(actions.signupAction(userData, history)),
        closeMessage: () => dispatch(actions.closeMessage())
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUpForm));
import React, { useState } from 'react';
import {
    Snackbar,
    IconButton,
    CircularProgress,
    SnackbarContent,
} from '@material-ui/core'
import '../assets/styles/resetpassword.css';
import { Close } from '@material-ui/icons'
import { withRouter} from 'react-router-dom';
import { Button } from 'react-bootstrap'
import { resetPasswordData } from '../AuthStateData/resetPwdData'
import validator from 'validator'
import { connect } from 'react-redux';
import * as actions from '../redux/actions/resetPassword';
import { CustomTextField, CustomStyles } from '../StyledComponents';



const ResetPasswordRequest = props => {
    const [userInfo, setUserInfo] = useState({ ...resetPasswordData })
    const classes = CustomStyles();

    const handleChange = (e) => {
        e.persist();
        setUserInfo(userInfo => ({ ...userInfo, [e.target.name]: e.target.value }))
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateInput();
        if (!errors) {
            const user = {
                email: userInfo.email
            }
            await props.sendRequestEmail(user, props.history)
        }
    }

    const validateInput = () => {

        const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        let hasErrors = false;
        const errors = {
            emailError: userInfo.emailError,
            emailErrorStatus: userInfo.emailErrorStatus
        }

        if (!validator.isEmail(userInfo.email) || !regexEmail.test(userInfo.email)) {
            hasErrors = true
            errors.emailError = 'Email is invalid.';
            errors.emailErrorStatus = true;
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
            <div className="row mt-5 justify-content-center">
                <form action="" className="login-form" onSubmit={handleSubmit}>
                    <h3 className="mb-5 text-center">Enter Your Email</h3>
                    {props.resetRequest.loading === 'block' ? (
                        <div className="row mb-5 justify-content-center">
                            <CircularProgress
                                value={20}
                                className="circular-progress" />
                        </div>
                    ) :
                        null}
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


                    <div className="col-md-12 text-center">
                        <Button type="submit" className="btn auth-btn">Send</Button>

                    </div>
                </form>
            </div>


            <Snackbar
                className="snackbar"
                open={props.resetRequest.open}
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
                    message={<span id="message-id">{props.resetRequest.error}</span>} />
            </Snackbar>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        resetRequest: state.resetRequest
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendRequestEmail: (data, history) => dispatch(actions.resetEmailOwner(data, history )),
        closeMessage: () => dispatch(actions.closeMessage())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResetPasswordRequest))
import React, { Fragment } from 'react';
import logo from '../assets/images/logo.png'
import '../assets/styles/navbar.css'
import { Link, useLocation } from 'react-router-dom';
import { LogoutAction } from '../redux/actions/logoutAction';
import { connect } from 'react-redux'

const NavBar = ({ logOut }) => {

    let { pathname } = useLocation();

    const RenderSwitch = ({ value }) => {

        const reportId = value.split('/')[2]; 
        switch (value) {
            case '/login':
                return (<Link to="/" className="btn auth-btn" replace>Sign Up</Link>);

            case '/':
                return (<Link to="/login" className="btn auth-btn" replace>Log In</Link>);

            case '/create-report':
                return (<Link to="/" className="btn auth-btn" onClick={logOut} replace>Log Out</Link>);

            case `/get-report/${reportId}`:
                return (<Link to="/" className="btn auth-btn" onClick={logOut} replace>Log Out</Link>);
            default:
                break;
        }
    }

    return (
        <Fragment>
            {pathname === '/admin-dashboard' ? null : (
                <nav className="navbar navbar-light fixed-top">

                    <Link className="navbar-brand logo-container" to="/">
                        <img src={logo} alt="" className="logo" />
                    </Link>

                    <div className="float-lg-right">{<RenderSwitch value={pathname} />}</div>
                </nav>
            )}
        </Fragment>
    )
}

const mapDispatchToProps = dispatch => {
    return { logOut: () => dispatch(LogoutAction()) }
}
export default connect(null, mapDispatchToProps)(NavBar);
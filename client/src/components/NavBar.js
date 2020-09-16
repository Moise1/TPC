import React from 'react';
import logo from '../assets/images/logo.png'
import '../assets/styles/navbar.css'
import {Link, useLocation } from 'react-router-dom';


const NavBar = props => {

    let {pathname} = useLocation();
    
    return (
        <nav className="navbar navbar-light fixed-top">

            <Link className="navbar-brand logo-container" to="/">
                <img src={logo} alt="" className="logo" />
            </Link>

            <div className="float-lg-right">
                {
                    pathname === '/login'? 
                    ( <Link to="/" className="btn auth-btn" replace>Sign Up</Link>) :
                    (<Link to="/login" className="btn auth-btn" replace>Log In</Link>)
                }
            </div>
        </nav>
    )
}

export default NavBar;
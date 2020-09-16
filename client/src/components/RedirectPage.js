import React from 'react';
import { withRouter } from 'react-router-dom';
import '../assets/styles/redirectPage.css';
import { Button } from 'react-bootstrap';

const RedirectPage = () => (
    <div className="container justify-content-center redirect-container">
        <Button 
            type="button"
            className="redirect-btn"
            size="lg"
            block
            href="/login">Password is successfully reset. Go back to log in.
    </Button>
    </div>
);

export default withRouter(RedirectPage);
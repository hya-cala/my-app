import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService.js';
import { BrowserRouter as Route, Redirect } from 'react-router-dom';


class AuthenticatedRoute extends Component {
    render() {
        if (AuthenticationService.isUserLoggedIn()) {
            console.log(this.props)
            return < Route {...this.props} />
        }
        return <Redirect to='/login' />
    }
}

export default AuthenticatedRoute;
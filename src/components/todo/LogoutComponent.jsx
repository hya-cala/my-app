import React, { Component } from 'react';
import './todoapp.css'

class LogoutComponent extends Component {
    render() {
        return (
            <div>
                <h1>You are logged out.</h1>
                <div className='container'>
                    Thank you for using this application.
                </div>
            </div>
        )
    }
}

export default LogoutComponent;
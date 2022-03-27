import React, { Component } from 'react';
import './todoapp.css'
import AuthenticationService from './AuthenticationService.js';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Rena',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    loginClicked() {
        // AuthenticationService.executeBasicAuthenticationService(this.state.username, this.state.password)
        //     .then(
        //         () => {
        //             AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
        //             this.props.history.push(`/welcome/${this.state.username}`)
        //         }
        //     ).catch(
        //         () => {
        //             this.setState({ hasLoginFailed: true });
        //             this.setState({ showSuccessMessage: false });
        //         }
        //     )

        AuthenticationService.executeJwtAuthenticationService(this.state.username, this.state.password)
            .then(
                (res) => {
                    console.log(res);
                    AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, res.data.token);
                    this.props.history.push(`/welcome/${this.state.username}`)
                }
            ).catch(
                () => {
                    console.log(this.state.username, this.state.password);
                    this.setState({ hasLoginFailed: true });
                    this.setState({ showSuccessMessage: false });
                }
            )
    }

    render() {
        return (
            <div className='login'>
                <h1>Login</h1>
                <div className='container'>
                    {this.state.hasLoginFailed && <div className='alert alert-warning'>Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                    <label htmlFor='username'>Username: </label>
                    <input type='text' id='username' name='username' placeholder='Username' value={this.state.username} onChange={this.handleChange} />
                    <label htmlFor='password'>Password: </label>
                    <input type='password' id='password' name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange} />
                    <button className='btn btn-success' onClick={this.loginClicked}>Login</button>
                </div>

            </div>
        )
    }
}
export default LoginComponent;
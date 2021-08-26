import React, { Component } from 'react';
import './todoapp.css'
import { Link } from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService';
import { withRouter } from 'react-router';

class WelcomeComponent extends Component {
    constructor(props) {
        super(props);
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
        this.handleError = this.handleError.bind(this);
        this.state = {
            welcomeMessage: '',
            customizeClicked: false
        }
    }
    render() {
        return (
            <>
                <h1>Welcome! </h1>
                < div className='container'> Welcome {this.props.match.params.name}.You can manage your todos < Link to='/todos' > here</Link >.</div >
                < div className='container'>
                    Click here to get a customized welcome message.
                    <button onClick={this.retrieveWelcomeMessage} className='btn btn-success'>Get Welcome Message</button>
                </div >
                <div className='container'>
                    {this.state.customizeClicked && <h2>Your Customized Welcome Message</h2>}
                    {this.state.welcomeMessage}
                </div>
            </>
        )
    }
    retrieveWelcomeMessage() {
        this.setState({ customizeClicked: true });
        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
            .then(res => this.handleSuccessfulResponse(res))
            .catch(err => this.handleError(err))

        // HelloWorldService.executeHelloWorldBeanService()
        //     .then(res => this.handleSuccessfulResponse(res))
        //.catch()
    }

    handleSuccessfulResponse(res) {
        console.log(res)
        this.setState({ welcomeMessage: res.data.message })
    }
    handleError(err) {
        console.log(err.response);
        this.setState({ welcomeMessage: err.response.data.message })
    }
}

export default WelcomeComponent;
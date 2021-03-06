import React, { Component } from 'react';
import './todoapp.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute'
import LoginComponent from './LoginComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import ListTodoComponent from './ListTodoComponent.jsx'
import TodoComponent from './TodoComponent.jsx'

class TodoApp extends Component {
    render() {
        return (
            <div className='TodoApp'>
                <Router>
                    <HeaderComponent />
                    <Switch>
                        <Route path='/' exact component={LoginComponent} />
                        <Route path='/login' component={LoginComponent} />
                        <AuthenticatedRoute path='/welcome/:name' component={WelcomeComponent} />
                        <AuthenticatedRoute exact path='/todos' component={ListTodoComponent} />
                        <AuthenticatedRoute path='/logout' component={LogoutComponent} />
                        <AuthenticatedRoute path='/todos/:id' component={TodoComponent} />
                        <Route component={ErrorComponent} />
                    </Switch>
                    <FooterComponent />
                </Router>
            </div>
        )
    }
}

function ErrorComponent() {
    return <div>An Error Occurred. Please contact Rena for support. </div>
}

export default TodoApp;
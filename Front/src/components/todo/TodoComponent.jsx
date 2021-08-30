import React, { Component } from 'react'
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js';

class TodoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            description: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }
    validate(values) {
        let err = {};
        if (!values.description) {
            err.description = "Enter a Description"
        } else if (values.description.length < 5) {
            err.description = "Enter at least 5 characters in Description"
        }
        if (!moment(values.targetDate).isValid()) {
            err.targetDate = 'Enter a valid target date'
        }
        return err;
    }
    componentDidMount() {
        let username = AuthenticationService.getLoggedInUsername();
        if (this.state.id === -1) {
            return
        }
        TodoDataService.retrieveTodo(username, this.state.id)
            .then(res => this.setState({
                description: res.data.description,
                targetDate: moment(res.data.targetDate).format('YYYY-MM-DD')
            }))
    }
    onSubmit(values) {
        let username = AuthenticationService.getLoggedInUsername();
        let todo = {
            id: this.state.id,
            username: username,
            description: values.description,
            targetDate: values.targetDate
        }
        if (this.state.id === -1) {
            TodoDataService.createTodo(username, todo).then(() => {
                this.props.history.push('/todos')
            })
        } else {
            TodoDataService.updateTodo(username, this.state.id, todo).then(() => {
                this.props.history.push('/todos')
            })
        }
    }
    render() {
        let { id, description, targetDate } = this.state;
        return (
            <div>
                <h1>Todo</h1>
                <div className='container'>
                    <Formik
                        initialValues={{
                            id,
                            description,
                            targetDate
                        }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name='description' component='div' className='alert alert-warning' />
                                    <ErrorMessage name='targetDate' component='div' className='alert alert-warning' />
                                    <fieldset className='form-group'>
                                        <label htmlFor="description">Description</label>
                                        <Field className='form-control' type='text' name='description' id='description' />
                                    </fieldset>
                                    <fieldset className='form-group'>
                                        <label htmlFor='targetDate'>Target Date</label>
                                        <Field className='form-control' type='date' name='targetDate' id='targetDate' />
                                    </fieldset>
                                    <button type='submit' className='btn btn-success'>Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )

    }
}

export default TodoComponent;
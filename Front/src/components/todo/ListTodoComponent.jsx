import React, { Component } from 'react';
import './todoapp.css'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService'
import moment from 'moment'

class ListTodoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            message: null
        };
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
        this.refreshTodos = this.refreshTodos.bind(this);
        this.updateTodoClicked = this.updateTodoClicked.bind(this);
        this.addTodoClicked = this.addTodoClicked.bind(this);
    }
    componentDidMount() {
        this.refreshTodos()
    }
    refreshTodos() {
        let username = AuthenticationService.getLoggedInUsername();
        TodoDataService.retrieveAllTodos(username)
            .then(res => {
                this.setState({ todos: res.data })
            });
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps);
        console.log(nextState)
        return true
    }
    deleteTodoClicked(id) {
        let username = AuthenticationService.getLoggedInUsername();
        TodoDataService.deleteTodo(username, id)
            .then(res => {
                this.setState({ message: `Delete of todo ${id} successful` })
                this.refreshTodos();
            })
    }
    addTodoClicked() {
        this.props.history.push(`todos/-1`)
    }

    updateTodoClicked(id) {
        this.props.history.push(`todos/${id}`)
    }
    render() {
        return (
            <div>
                <h1>List Todos</h1>
                {this.state.message && <div className='alert alert-success'>{this.state.message}</div>}
                <div className='container'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Is Completed?</th>
                                <th>Target Date</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(todo =>
                                    <tr key={todo.id}>
                                        <td> {todo.description}</td>
                                        <td> {todo.done.toString()}</td>
                                        <td> {moment(todo.targetDate.toString()).format('YYYY-MM-DD')}</td>
                                        <td> <button className='btn btn-success' onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                        <td> <button className='btn btn-warning' onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className='btn btn-success' onClick={this.addTodoClicked}>Add</div>
                </div>
            </div>
        )
    }
}

export default ListTodoComponent;

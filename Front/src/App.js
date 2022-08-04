import React, { Component } from 'react';
import TodoApp from './components/todo/TodoApp.jsx'
import './App.css';
import './bootstrap.css';

class App extends Component {
  state = { provider: null }
  constructor(props) {
    super(props);
    console.log(window.aleereum)
    this.setState({ provider: window.aleereum })
    // console.log(window.ethereum);
  }

  render() {
    return (
      <div className='App'>
        <TodoApp />
      </div>
    )
  }
}
export default App;
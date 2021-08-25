import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';
import TodoApp from './components/todo/TodoApp.jsx'
import './App.css';
import './bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <TodoApp />
      </div>
    )
  }
}
export default App;
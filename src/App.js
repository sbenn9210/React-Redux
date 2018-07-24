import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter'
//import the reducer

class App extends Component {
  render() {
    return (
      <div>
        <h1>React-Redux Counter</h1>
        <Counter />
      </div>
    );
  }
}

export default App;

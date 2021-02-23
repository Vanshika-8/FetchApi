import React, { Component } from 'react';
import './App.css';
import FetchApi from './components/FetchApi';
import './components/style.css';

class App extends Component {
  render() {
    return (
      <div className="body">
       <FetchApi />
      </div>
    );
  }
}

export default App;

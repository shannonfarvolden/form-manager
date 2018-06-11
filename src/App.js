import React, { Component } from 'react';
//import logo from './images/logo.png';
import './App.css';

import HomeContainer from './containers/HomeContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeContainer />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Broadridge Inform Config</h1>
        </header>
        <h3>Best team ever!!!!</h3> */}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import { Provider } from 'react-redux'

import HomeContainer from './containers/Home'
import './App.css';

import store from './redux/store'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <HomeContainer />
        </Provider> 
      </div>
    )
  }
}

export default App

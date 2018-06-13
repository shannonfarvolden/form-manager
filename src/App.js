import React, { Component } from 'react'
import { Provider } from 'react-redux'

import HomeContainer from './containers/Home'
import Navbar from './components/Navbar'
import './App.css';

import store from './redux/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>      
          <div className="App">
            <Navbar/>
            <HomeContainer/>
          </div>
      </Provider> 
      
    )
  }
}

export default App

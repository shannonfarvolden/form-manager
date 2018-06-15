import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomeContainer from "./containers/Home";
import Navbar from "./components/Navbar";
import "./App.css";

import store from "./redux/store";

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            <Navbar />
            <Route path="/" exact component={HomeContainer} />
          </div>
        </Provider>
    </Router>
      
    );
  }
}

export default App;

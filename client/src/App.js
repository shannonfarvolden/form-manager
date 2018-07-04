import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import * as actions from "./redux/actions";

import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Main />
        </div>
      </Router>
    );
  }
}

export default connect(null, actions)(App);

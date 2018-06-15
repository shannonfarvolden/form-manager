import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeContainer from "./containers/Home";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import "./App.css";

import store from "./redux/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <main>
              <Switch>
                <Route path="/" exact component={HomeContainer} />
                <Route path="/form" exact component={Form} />
              </Switch>
            </main>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

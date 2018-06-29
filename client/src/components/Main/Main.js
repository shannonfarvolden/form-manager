import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../Home";
import FormContainer from "../../containers/Form";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/form" exact component={FormContainer} />
      </Switch>
    </main>
  );
};

export default Main;

import React from "react";
import { Switch, Route } from "react-router-dom";

import HomeContainer from "../../containers/Home";
import Form from "../Form";
import Dialog from "../Dialog";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/form" exact component={Form} />
        <Route path="/config" exact component={Dialog} />
      </Switch>
    </main>
  );
};

export default Main;

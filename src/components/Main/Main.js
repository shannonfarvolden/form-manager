import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../Home";
import Form from "../Form";
import PageContainer from "../../containers/Page";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/form" exact component={Form} />
        <Route path="/page" exact component={PageContainer} />
      </Switch>
    </main>
  );
};

export default Main;

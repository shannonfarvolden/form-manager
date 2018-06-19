import React from "react";
import { Switch, Route } from "react-router-dom";

import HomeContainer from "../../containers/Home";
import PageContainer from "../../containers/Page";
import Form from "../Form";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/form" exact component={Form} />
        <Route path="/page" exact component={PageContainer} />
      </Switch>
    </main>
  );
};

export default Main;

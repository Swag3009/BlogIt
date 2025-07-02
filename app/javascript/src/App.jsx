import React from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Blogs from "./components/Blogs";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route exact component={Blogs} path="/blogs" />
    </Switch>
  </Router>
);

export default App;

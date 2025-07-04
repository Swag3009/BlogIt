import React from "react";

import { QueryClientProvider } from "react-query";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Blogs from "./components/Blogs";
import { PageNotFound } from "./components/common";
import routes from "./route";
import queryClient from "./utils/queryClient";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <Switch>
        <Route exact path={routes.root} render={() => <h1>Home</h1>} />
        <Route exact component={Blogs} path={routes.blogs} />
        <Route exact component={PageNotFound} path={routes.anyPath} />
      </Switch>
    </Router>
  </QueryClientProvider>
);

export default App;

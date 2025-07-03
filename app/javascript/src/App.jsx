import React from "react";

import { QueryClientProvider } from "react-query";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Blogs from "./components/Blogs";
import queryClient from "./utils/queryClient";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <Switch>
        <Route exact path="/" render={() => <h1>Home</h1>} />
        <Route exact component={Blogs} path="/blogs" />
      </Switch>
    </Router>
  </QueryClientProvider>
);

export default App;

import React from "react";

import { QueryClientProvider } from "react-query";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { BlogList, CreateBlog } from "./components/Blog";
import { PageNotFound } from "./components/common";
import routes from "./route";
import queryClient from "./utils/queryClient";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <ToastContainer />
      <Switch>
        <Route exact path={routes.root} render={() => <h1>Home</h1>} />
        <Route exact component={BlogList} path={routes.blogs} />
        <Route exact component={CreateBlog} path={routes.createBlog} />
        <Route exact component={PageNotFound} path={routes.anyPath} />
      </Switch>
    </Router>
  </QueryClientProvider>
);

export default App;

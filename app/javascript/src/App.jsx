import React from "react";

import { QueryClientProvider } from "react-query";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Blogs, CreateBlog, ShowBlog } from "./components/Blog";
import { PageNotFound, Container } from "./components/common";
import routes from "./route";
import queryClient from "./utils/queryClient";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <ToastContainer />
      <Container>
        <Switch>
          <Route exact path={routes.root} render={() => <h1>Home</h1>} />
          <Route exact component={Blogs} path={routes.blogs} />
          <Route exact component={CreateBlog} path={routes.createBlog} />
          <Route exact component={ShowBlog} path={routes.showBlog} />
          <Route exact component={PageNotFound} path={routes.anyPath} />
        </Switch>
      </Container>
    </Router>
  </QueryClientProvider>
);

export default App;

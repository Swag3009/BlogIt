import React from "react";

import { QueryClientProvider } from "react-query";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Signin, Signup } from "./components/Authentication";
import PrivateLayoutRoutes from "./components/PrivateLayoutRoutes";
import routes from "./route";
import queryClient from "./utils/queryClient";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <ToastContainer />
      <Switch>
        <Route exact component={Signup} path={routes.signup} />
        <Route exact component={Signin} path={routes.signin} />
        <Route path="/">
          <PrivateLayoutRoutes />
        </Route>
      </Switch>
    </Router>
  </QueryClientProvider>
);

export default App;

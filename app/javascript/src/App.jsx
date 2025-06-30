import React from "react";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" render={()=> <h1>Home</h1>} />
      <Route exact path="/about" render={()=> <h1>About</h1>} />
    </Switch>
  </Router>
)

export default App;

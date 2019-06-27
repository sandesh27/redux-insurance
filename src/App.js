import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./common/Navigation";
import Home from "./components/home/Home";
import Policies from "./components/policies/Policies";
import CreatePolicy from "./components/policies/CreatePolicy";
import Claims from "./components/claims/Claims";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/policies" component={Policies} />
        <Route path="/policies/new" component={CreatePolicy} />
        <Route exact path="/claims" component={Claims} />
      </Switch>
    </Router>
  );
};

export default App;

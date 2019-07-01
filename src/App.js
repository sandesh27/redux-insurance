import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Claims from "./components/claims/Claims";
import Policies from "./components/policies/Policies";
import AboutUs from "./components/aboutus/Aboutus";
import Navigation from "./common/Navigation";
import CreatePolicy from "./components/policies/CreatePolicy";
import AddClaim from "./components/claims/AddClaim";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";

const App = () => {
  return (
    <div className="ui container">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/claims" component={Claims} />
          <Route path="/claims/new" component={AddClaim} />
          <Route exact path="/policies" component={Policies} />
          <Route path="/policies/new" component={CreatePolicy} />
          <Route path="/about" component={AboutUs} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

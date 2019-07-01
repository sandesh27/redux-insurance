import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";

const renderAuthLinks = isLoggedIn => {
  return isLoggedIn ? (
    <NavLink className="item" to="/logout">
      LogOut
    </NavLink>
  ) : (
    <NavLink className="item" to="/login">
      Login
    </NavLink>
  );
};
const Navigation = ({ isLoggedIn }) => {
  return (
    <div className="ui secondary  menu">
      <NavLink exact to="/" className="item">
        Home
      </NavLink>
      <NavLink to="/policies" className="item">
        Policies
      </NavLink>
      <NavLink to="/claims" className="item">
        Claims
      </NavLink>
      <NavLink to="/about" className="item">
        About Us
      </NavLink>
      <div className="right menu">
        <div className="item">
          <Dashboard />
        </div>
        <div className="ui item">{renderAuthLinks(isLoggedIn)}</div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  return {
    isLoggedIn: auth.isLoggedIn
  };
};
export default connect(mapStateToProps)(Navigation);

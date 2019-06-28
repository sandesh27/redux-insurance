import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="ui secondary  menu">
      <NavLink to="/home" className="active item">
        Home
      </NavLink>
      <NavLink to="/login" className="item">
        Login
      </NavLink>
      <NavLink to="/policies" className="item">
        Policies
      </NavLink>
      <NavLink to="/claims" className="item">
        Claims
      </NavLink>
    </div>
  );
};

export default Navigation;

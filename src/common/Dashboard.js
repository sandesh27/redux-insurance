import React from "react";
import { connect } from "react-redux";

const Dashboard = ({ amount, claims, policies }) => {
  return (
    <div className="ui raised segment">
      <span className="ui blue tag label">{amount}$</span>
      <span className="ui red tag label">{claims} Claims</span>
      <span className="ui teal tag label">{policies} Policies</span>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    amount: state.accounting,
    claims: state.claimsHistory.length,
    policies: state.policies.length
  };
};

export default connect(mapStateToProps)(Dashboard);

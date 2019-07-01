import React from "react";
import { connect } from "react-redux";

const renderClaims = claims => {
  return claims.map(claim => {
    return (
      <tr key={claim.id}>
        <td>{claim.name}</td>
        <td>{claim.amount}</td>
      </tr>
    );
  });
};
const ClaimsList = ({ claims }) => {
  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th>Policy Holder Name</th>
          <th>Amount Of Claim</th>
        </tr>
      </thead>
      <tbody>{renderClaims(claims)}</tbody>
    </table>
  );
};

ClaimsList.defaultProps = {
  claims: [
    {
      name: "Vilas",
      amount: 100
    }
  ]
};

const mapStateToProps = state => {
  return {
    claims: state.claimsHistory
  };
};
export default connect(mapStateToProps)(ClaimsList);

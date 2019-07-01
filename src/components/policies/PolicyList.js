import React from "react";
import { connect } from "react-redux";
import { deletePolicy } from "../../actions/policyActions";

const renderPolicies = (policies, deletePolicy) => {
  return policies.map(policy => {
    return (
      <tr key={policy.id}>
        <td>{policy.name}</td>
        <td>{policy.premium}</td>
        <td>{policy.dateOfJoining}</td>
        <td>
          <button
            onClick={() => deletePolicy(policy.id)}
            className="ui button red"
            type="submit"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
};
const PoilcyList = ({ policies, deletePolicy }) => {
  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th>Policy Holder Name</th>
          <th>Premium Paid</th>
          <th>Active Since</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>{renderPolicies(policies, deletePolicy)}</tbody>
    </table>
  );
};

PoilcyList.defaultProps = {
  policies: [
    {
      name: "Vilas",
      premium: 100,
      dateOfJoining: "31-03-2019"
    }
  ]
};

const mapStateToProps = state => {
  return {
    policies: state.policies
  };
};
export default connect(
  mapStateToProps,
  {
    deletePolicy
  }
)(PoilcyList);

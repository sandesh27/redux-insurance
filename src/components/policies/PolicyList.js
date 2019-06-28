import React, { Component } from "react";
import { connect } from "react-redux";
// import { deletePolicy } from "../../actions/policyActions";

const renderPoliciesData = (policies, deletePolicy) => {
  return policies.map(policy => {
    return (
      <tr key={policy.name}>
        <td>{policy.name}</td>
        <td>{policy.premium}</td>
        <td>{policy.dateOfJoining}</td>
        <td>
          <button
            className="ui button negative"
            // onClick={deletePolicy(policy.name)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
};

class PolicyList extends Component {
  render() {
    const { policies, deletePolicy } = this.props;
    return (
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Policy Holder Name</th>
            <th>Premium</th>
            <th>Active Since</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{renderPoliciesData(policies, deletePolicy)}</tbody>
      </table>
    );
  }
}

PolicyList.defaultProps = {
  policies: []
};

const mapStateToProps = ({ policies, deletePolicy }) => {
  return {
    policies,
    deletePolicy
  };
};

export default connect(mapStateToProps)(PolicyList);

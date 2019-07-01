import React, { Component } from "react";
import { connect } from "react-redux";
import { createClaim } from "../../actions/claimActions";
import { updateAccounts } from "../../actions/accountActions";

class AddClaim extends Component {
  state = {
    name: "",
    amount: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createClaim(this.state.name, +this.state.amount);
    this.props.updateAccounts(-this.state.amount);
    this.props.history.push("/claims");
  };
  renderPolicyHolders = () => {
    return this.props.policyHolders.map(policyHolder => {
      return (
        <option key={policyHolder} value={policyHolder}>
          {policyHolder}
        </option>
      );
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="ui form">
        <div className="field">
          <label>Policy Holder</label>
          <select
            name="name"
            className="ui fluid dropdown"
            value={this.state.name}
            onChange={this.handleChange}
          >
            <option value="">--</option>
            {this.renderPolicyHolders()}
          </select>
        </div>
        <div className="field">
          <label>Amount of Claim</label>
          <input
            type="text"
            value={this.state.amount}
            onChange={this.handleChange}
            name="amount"
            placeholder="Amount Of Claim"
          />
        </div>
        <button className="ui button positive" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ policies }) => {
  return {
    policyHolders: policies.map(policy => policy.name)
  };
};
export default connect(
  mapStateToProps,
  { createClaim, updateAccounts }
)(AddClaim);

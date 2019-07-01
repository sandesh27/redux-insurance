import React, { Component } from "react";
import { connect } from "react-redux";
import { createPolicy } from "../../actions/policyActions";
import { updateAccounts } from "../../actions/accountActions";

class CreatePolicy extends Component {
  state = {
    firstName: "",
    lastName: "",
    premium: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createPolicy(
      this.state.firstName + " " + this.state.lastName,
      +this.state.premium,
      new Date().toDateString()
    );
    this.props.updateAccounts(+this.state.premium);

    this.props.history.push("/policies");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="ui form">
        <div className="field">
          <label>First Name</label>
          <input
            value={this.state.firstName}
            onChange={this.handleChange}
            type="text"
            name="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="field">
          <label>Last Name</label>
          <input
            value={this.state.lastName}
            onChange={this.handleChange}
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
        </div>
        <div className="field">
          <label>Premium Paid</label>
          <input
            value={this.state.premium}
            onChange={this.handleChange}
            type="text"
            name="premium"
            placeholder="Premium Amount"
          />
        </div>
        <button className="ui button blue" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
export default connect(
  null,
  {
    createPolicy,
    updateAccounts
  }
)(CreatePolicy);

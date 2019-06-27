import React, { Component } from "react";
import { connect } from "react-redux";
import { createPolicy } from "../../actions/policyActions";

class CreatePolicy extends Component {
  state = {
    firstName: "",
    lastName: "",
    premium: ""
  };

  handelChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const name = `${this.state.firstName} ${this.state.lastName}`;
    const amount = this.state.premium;
    this.props.createPolicy(name, amount, new Date().toDateString());
    this.props.history.push("/policies");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="ui form">
        <div className="field">
          <label>First Name</label>
          <input
            type="text"
            value={this.state.firstName}
            name="firstName"
            placeholder="First Name"
            onChange={this.handelChange}
          />
        </div>
        <div className="field">
          <label>Last Name</label>
          <input
            type="text"
            value={this.state.lastName}
            name="lastName"
            placeholder="Last Name"
            onChange={this.handelChange}
          />
        </div>
        <div className="field">
          <label>Premium</label>
          <input
            type="text"
            value={this.state.premium}
            name="premium"
            placeholder="Premium"
            onChange={this.handelChange}
          />
        </div>
        <button className="ui button positive" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default connect(
  null,
  { createPolicy }
)(CreatePolicy);

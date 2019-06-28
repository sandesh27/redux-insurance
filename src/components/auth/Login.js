import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

class Login extends Component {
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.loginUser(this.state.username, this.state.password, () => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="ui form">
        <div className="field">
          <label>User Name</label>
          <input type="text" name="username" placeholder="User Name" />
        </div>
        <div className="field">
          <label>Password</label>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default connect(
  null,
  { loginUser }
)(Login);

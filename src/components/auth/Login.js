import React, { Component } from "react";
import { connect } from "react-redux";
import queryString from "query-string";
import { LoginUser } from "../../actions/authActions";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const queryParams = queryString.parse(this.props.location.search);

    this.props.LoginUser(this.state.username, this.state.password, () => {
      if (queryParams.redirectTo) {
        this.props.history.push(queryParams.redirectTo);
      } else {
        this.props.history.push("/");
      }
    });
  };

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <input
              value={this.state.username}
              name="username"
              onChange={this.handleChange}
              type="text"
              placeholder="UserId"
            />
          </div>
          <div className="field">
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password"
            />
          </div>
          <button className="ui button positive" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { LoginUser }
)(Login);

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class UserLogin extends Component {
  state = {
    email: "",
    password: "",
    errors: [],
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let errors = [];
    if (this.state.password.length < 8) {
      errors.push("Şifrə ən azı 8 simvol olmalıdır.");
    }
    if (!this.state.email.match("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+.az$")) {
      errors.push("Email yalnız .az domenlərinə icazə verilir.");
    }
    if (errors.length > 0) {
      this.setState({ errors: errors });
    } else {
      this.setState({ errors: [] });
    }
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          {this.state.errors.length > 0 ? (
            <div key={Math.random*100} className="errorMsg">
              <ul>
                {this.state.errors.map((e) => (
                  <li>{e}</li>
                ))}
              </ul>
            </div>
          ) : null}
          <label htmlFor="mail">
            Email:
            <input
              className="form-input"
              id="mail"
              type="mail"
              name="mail"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              className="form-input"
              id="password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </label>
          <button type="submit" className="btn">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}



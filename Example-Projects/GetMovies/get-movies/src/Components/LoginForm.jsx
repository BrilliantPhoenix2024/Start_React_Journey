import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form";
import { Navigate } from "react-router-dom";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
    redirect: false,
  };

  schema = Joi.object({
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  });

  doSubmit = async () => {
    const { username, password } = this.state.data;

    try {
      const response = await fetch("https://your-api.com/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) throw new Error("Invalid credentials");

      const data = await response.json();
      localStorage.setItem("token", data.token); // Save JWT
      this.setState({ redirect: true }); // Trigger redirect
    } catch (error) {
      const errors = { ...this.state.errors };
      errors.username = "Login failed. Please check your credentials.";
      this.setState({ errors });
    }
  };

  render() {
    if (this.state.redirect) return <Navigate to="/" />;

    return (
      <div className="w-75 m-auto">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;

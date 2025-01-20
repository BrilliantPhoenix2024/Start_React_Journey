import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form";
import { Navigate } from "react-router-dom";
import auth from "../services/authService"; // Adjust path as needed

class LoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
    redirect: false,
  };

  schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });

  doSubmit = async () => {
    const { email, password } = this.state.data;

    try {
      await auth.login(email, password); // Uses axiosClient internally
      this.setState({ redirect: true });
    } catch (ex) {
      const errors = { ...this.state.errors };
      if (ex.response && ex.response.status === 400)
        errors.email = "Invalid email or password.";
      else errors.email = "An unexpected error occurred. Please try again.";
      this.setState({ errors });
    }
  };

  render() {
    if (this.state.redirect) return <Navigate to="/" />;

    return (
      <div className="w-75 m-auto">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;

import React from "react";
import Joi from "joi-browser";
import { Navigate } from "react-router-dom";
import Form from "./common/Form";
import axiosClient from "../services/axiosClient"; // Adjust path if needed
import config from "../config.json"; // ✅ Correct
import auth from "../services/authService";

const apiRegister = config.apiEndpoint + "/users";

class RegisterForm extends Form {
  state = {
    data: { email: "", password: "", name: "" },
    errors: {},
    redirect: false,
  };

  schema = Joi.object({
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  });

  doSubmit = async () => {
    try {
      const response = await axiosClient.post(apiRegister, this.state.data);
      const token = response.headers["x-auth-token"];

      if (token) {
        auth.loginWithJwt(token);
        this.setState({ redirect: true });
      } else {
        const errors = { ...this.state.errors };
        errors.email = "Registration succeeded but no token received.";
        this.setState({ errors });
      }
    } catch (error) {
      const errors = { ...this.state.errors };
      if (error.response && error.response.data) {
        errors.email =
          typeof error.response.data === "string"
            ? error.response.data
            : error.response.data.message || "An error occurred.";
      } else {
        errors.email = "Registration failed. Please try again.";
      }
      this.setState({ errors });
    }
  };
  
  render() {
    if (this.state.redirect) return <Navigate to="/" />;

    return (
      <div className="w-75 m-auto">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;

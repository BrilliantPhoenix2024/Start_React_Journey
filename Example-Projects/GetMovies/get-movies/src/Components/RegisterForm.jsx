import React from "react";
import Form from "./common/Form";
import Joi from "joi-browser";

class RegisterForm extends Form {
  schema = Joi.object({
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  });

  doSubmit = () => {
    // Call the server or perform submission logic
    console.log("Submitted");
    console.log("Email:", this.state.data.email);
    console.log("Password:", this.state.data.password);
    console.log("Name:", this.state.data.name);
  };

  render() {
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

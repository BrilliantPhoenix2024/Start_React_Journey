import React from "react";
import Joi from "joi-browser"; // Import Joi
import Form from "./common/Form"; // Import the base Form class

class LoginForm extends Form {
  schema = Joi.object({
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  });

  doSubmit = () => {
    // Call the server or perform submission logic
    console.log("Submitted");
    console.log("Username:", this.state.data.username);
    console.log("Password:", this.state.data.password);
  };

  render() {
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

import React from "react";
import Joi from "joi-browser"; // Import Joi
import Input from "./common/Input"; // Assuming you have an Input component
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
    const { data, errors } = this.state; // Destructure state for easier access

    return (
      <div className="w-75 m-auto">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            label="Username"
            type="text"
            name="username"
            value={data.username}
            onChange={this.handleChange}
            error={errors.username} // Pass error message to Input component
          />

          <Input
            label="Password"
            type="password"
            name="password"
            value={data.password}
            onChange={this.handleChange}
            error={errors.password} // Pass error message to Input component
          />

          <button
            type="submit"
            className="btn btn-primary"
            disabled={this.validate()}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;

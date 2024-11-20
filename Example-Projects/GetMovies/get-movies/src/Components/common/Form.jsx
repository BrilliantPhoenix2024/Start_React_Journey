import React, { Component } from "react";
import Joi from "joi-browser"; // Correct import of Joi
import Input from "./Input";

class Form extends Component {
  state = {
    data: {
      username: "", // Initialize with empty string
      password: "", // Initialize with empty string
    },
    errors: {},
  };

  validateProperty = (name, value) => {
    let tempSchema;

    if (name === "username") {
      tempSchema = Joi.string().required().label("Username");
    } else if (name === "password") {
      tempSchema = Joi.string().required().label("Password");
    }

    const { error } = tempSchema.validate(value); // Validate the single property
    return error ? error.details[0].message : null; // Return the error message or null
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = this.schema.validate(this.state.data, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = this.validate();
    this.setState({ errors: validationErrors || {} });

    if (validationErrors) return; // Stop submission if there are errors

    this.doSubmit(); // Call the doSubmit method defined in child
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    const data = { ...this.state.data, [name]: value }; // Update data state

    const errorMessage = this.validateProperty(name, value);
    this.setState({
      data,
      errors: { ...this.state.errors, [name]: errorMessage }, // Update errors state
    });
  };

  renderButton(label) {
    return (
      <button
        type="submit"
        className="btn btn-primary"
        disabled={this.validate()}
      >
        {label}
      </button>
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state; // Destructure state for easier access
    return (
      <Input
        label={label}
        type={type}
        name={name}
        value={data[name]} // This will now be defined
        onChange={this.handleChange}
        error={errors[name]} // Pass error message to Input component
      />
    );
  }
}

export default Form;

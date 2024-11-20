import React, { Component } from "react";
import Joi from "joi-browser"; // Correct import of Joi

class Form extends Component {
  state = {
    data: {},
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
}

export default Form;

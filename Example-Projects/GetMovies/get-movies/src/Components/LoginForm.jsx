import React, { useState } from "react";
import Joi from "joi-browser"; // Import Joi
import Input from "./common/Input"; // Assuming you have an Input component

const LoginForm = () => {
  const [account, setAccount] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  // Define the schema using Joi.object()
  const schema = Joi.object({
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  });

  const validateProperty = (name, value) => {
    let tempSchema;

    if (name === "username") {
      tempSchema = Joi.string().required().label("Username");
    } else if (name === "password") {
      tempSchema = Joi.string().required().label("Password");
    }

    const { error } = tempSchema.validate(value); // Validate the single property
    return error ? error.details[0].message : null; // Return the error message or null
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccount((prevAccount) => ({
      ...prevAccount,
      [name]: value, // Dynamically update the property based on input name
    }));

    // Validate the specific field
    const errorMessage = validateProperty(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage, // Update the errors state
    }));
  };

  const validate = (account) => {
    const options = { abortEarly: false };
    const { error } = schema.validate(account, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(account);
    setErrors(validationErrors || {}); // Ensure errors is an object

    if (validationErrors && Object.keys(validationErrors).length > 0) return; // Stop submission if there are errors

    // If no errors, proceed with submission logic
    console.log("Submitted");
    console.log("Username:", account.username);
    console.log("Password:", account.password);
  };

  // Check if the form is valid by checking for errors
  const isValid = Object.keys(errors).length === 0;

  return (
    <div className="w-75 m-auto">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Username"
          type="text"
          name="username"
          value={account.username}
          onChange={handleChange}
          error={errors.username} // Pass error message to Input component
        />

        <Input
          label="Password"
          type="password"
          name="password"
          value={account.password}
          onChange={handleChange}
          error={errors.password} // Pass error message to Input component
        />

        <button type="submit" className="btn btn-primary" disabled={isValid}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

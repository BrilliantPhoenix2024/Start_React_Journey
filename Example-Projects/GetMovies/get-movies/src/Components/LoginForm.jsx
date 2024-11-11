import React, { useState } from "react";
import Input from "./common/Input";

const LoginForm = () => {
  const [account, setAccount] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccount((prevAccount) => ({
      ...prevAccount,
      [name]: value, // Dynamically update the property based on input name
    }));
  };

  const validate = () => {
    const errors = {};
    if (!account.username) errors.username = "Username is required.";
    if (!account.password) errors.password = "Password is required.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return; // Stop submission if there are errors

    // If no errors, proceed with submission logic
    console.log("Submitted");
    console.log("Username:", account.username);
    console.log("Password:", account.password);
  };

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

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

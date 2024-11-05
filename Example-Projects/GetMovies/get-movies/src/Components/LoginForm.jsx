import React, { useState } from "react";

const LoginForm = () => {
  const [account, setAccount] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccount((prevAccount) => ({
      ...prevAccount,
      [name]: value, // Dynamically update the property based on input name
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    console.log("Username:", account.username);
    console.log("Password:", account.password);
  };

  return (
    <div className="w-75 m-auto">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            autoFocus
            id="username"
            name="username" // Set name for the input
            type="text"
            className="form-control"
            value={account.username} // Bind value to state
            onChange={handleChange} // Use handleChange for input change
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            autoFocus
            id="password"
            name="password" // Set name for the input
            type="password"
            className="form-control"
            value={account.password} // Bind value to state
            onChange={handleChange} // Use handleChange for input change
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

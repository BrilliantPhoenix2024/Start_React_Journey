import React, { useState } from "react";
import Input from "./common/Input";

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
        <Input
          label="Username"
          type="text"
          name="username"
          value={account.username}
          onChange={handleChange}
        />

        <Input
          label="Password"
          type="password"
          name="password"
          value={account.password}
          onChange={handleChange}
        />

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

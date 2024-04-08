import React from "react";
import "./SubmitForm.css";

const SubmitForm = () => {
  return (
    <div>
      <h1>Please fill the form</h1>
      <form action="">
        <input type="text" placeholder="Name..." />
        <input type="email" placeholder="Email..." />
        <input type="number" placeholder="Age..." />
        <input type="password" placeholder="Password..." />
        <input type="password" placeholder="Confirm Password..." />
        <input type="submit" />
      </form>
    </div>
  );
};

export default SubmitForm;

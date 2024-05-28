import React from "react";
import { useSelector } from "react-redux";

const Contact = () => {
  const selector = useSelector((state) => state.user.user);
  return (
    <div>
      <h1>Contact {selector.user}</h1>
    </div>
  );
};

export default Contact;

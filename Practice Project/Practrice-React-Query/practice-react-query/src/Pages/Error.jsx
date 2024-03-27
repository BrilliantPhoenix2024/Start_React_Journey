import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Error</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home Page
      </button>
    </div>
  );
};

export default Error;

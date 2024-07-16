import React from "react";
import "./App.css";

const LoadingSpinner = ({ size = 40, color = "#61dafb" }) => {
  return (
    <div
      className="loading-spinner"
      style={{
        width: size,
        height: size,
        border: `4px solid ${color}`,
        borderTop: "4px solid transparent",
      }}
    ></div>
  );
};

export default LoadingSpinner;

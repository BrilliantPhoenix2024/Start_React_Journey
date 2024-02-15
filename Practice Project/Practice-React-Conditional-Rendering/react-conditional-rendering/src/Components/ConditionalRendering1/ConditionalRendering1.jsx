import React from "react";
import "./ConditionalRendering1.css";

const ConditionalRendering1 = () => {
  const age = 20;
  return (
    <div>
      {age > 20 ? (
        <h1 style={{ fontSize: age > 20 ? "50px" : "15px" }}>'over'</h1>
      ) : (
        <h1>under</h1>
      )}
      {age === 20 && <h2>your age is 20</h2>}
      <button type="submit" className={age > 20 ? "success" : "fail"}>
        Click me
      </button>
    </div>
  );
};

export default ConditionalRendering1;

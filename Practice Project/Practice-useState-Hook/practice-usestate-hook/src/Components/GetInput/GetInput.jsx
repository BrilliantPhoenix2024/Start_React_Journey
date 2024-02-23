import React, { useState } from "react";

const GetInput = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Inter your text"
        onChange={(event) => setInputValue(event.target.value)}
      />

      <h1>{inputValue}</h1>
    </div>
  );
};

export default GetInput;

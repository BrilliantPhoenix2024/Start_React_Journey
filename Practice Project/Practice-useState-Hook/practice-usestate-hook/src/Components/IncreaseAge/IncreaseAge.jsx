import React, { useState } from "react";

const IncreaseAge = () => {
  const [age, setAge] = useState(0);

  return (
    <div>
      <h1>{age}</h1>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
      <button onClick={() => setAge(age - 1)}>Decrease Age</button>
    </div>
  );
};

export default IncreaseAge;

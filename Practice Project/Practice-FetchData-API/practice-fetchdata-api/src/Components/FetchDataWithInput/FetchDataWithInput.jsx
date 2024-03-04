import React, { useState } from "react";
import axios from "axios";

const FetchDataWithInput = () => {
    const [name, setName] = useState("");
  //   const [predictedAge, setPredictedAge] = useState(0);
  const [predictedResult, setPredictedResult] = useState({});

  const fetchAge = () => {
    axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedResult(res.data);
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="inter your name..."
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={fetchAge}>Predict Age</button>
      <h1>
        Your name is {predictedResult?.name} your age is {predictedResult?.age}
      </h1>
    </div>
  );
};

export default FetchDataWithInput;

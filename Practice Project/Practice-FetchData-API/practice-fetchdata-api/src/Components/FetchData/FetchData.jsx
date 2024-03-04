import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchData = () => {
  const [catFact, setCatFact] = useState("");

  useEffect(() => {
    fetchFact();
  }, []);

  const fetchFact = () => {
    axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  return (
    <div>
      <button onClick={fetchFact}>Fetch Data</button>
      <p>{catFact}</p>
    </div>
  );
};

export default FetchData;

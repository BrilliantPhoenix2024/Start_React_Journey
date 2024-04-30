import React, { useReducer, useState } from "react";
import axios from "axios";
import { intialState, useReduce } from "../Components/useReduce/useReduce";

const CatFact = () => {
  //   const [loading, setLoading] = useState(false);
  //   const [fact, setFact] = useState("");
  //   const [error, setError] = useState(false);

  // fetch_start => loading : true
  // fetch_success => loading : false
  //               => res.data.fact
  // fetch_error => loading : false
  //             => error : true

  const [state, dispatch] = useReducer(useReduce, intialState);

  const handleFetch = () => {
    dispatch({ type: "fetch_start" });
    axios
      .get("https://catfact.ninja/fact")
      .then((res) => {
        dispatch({ type: "fetch_success", data: res.data.fact });
      })
      .catch((error) => {
        dispatch({ type: "fetch_error" });
      });
  };

  return (
    <div>
      <button onClick={handleFetch}>
        {state.loading ? "loading..." : "Fetch Cat Fact"}
      </button>
      {state.error && <p>something went wrong!</p>}
      <h1>{state.fact}</h1>
    </div>
  );
};

export default CatFact;

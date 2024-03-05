import React, { useState } from "react";
import axios from "axios";

const FetchDataWithInput1 = () => {
  const [generateExcuse, setGenerateExcuse] = useState("");

  const fetchExcuse = (excuse) => {
    axios
      .get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`)
      .then((res) => {
        console.log(res);
        setGenerateExcuse(res.data[0].excuse);
      });
  };
  return (
    <div>
      <h1>Generate an Excuse</h1>
      <button
        onClick={() => {
          fetchExcuse("party");
        }}
      >
        Party
      </button>
      <button
        onClick={() => {
          fetchExcuse("office");
        }}
      >
        Office
      </button>
      <button
        onClick={() => {
          fetchExcuse("family");
        }}
      >
        Family
      </button>
      <h2>{generateExcuse}</h2>
    </div>
  );
};

export default FetchDataWithInput1;

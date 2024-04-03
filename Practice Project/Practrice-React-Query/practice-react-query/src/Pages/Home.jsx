import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
  const {
    data: catData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["cat"],
    queryFn: async () => {
      return axios.get("https://catfact.ninja/fact").then((res) => res.data);
    },
  });

  if (isLoading) {
    return <h2>Loading ...</h2>;
  }

  if (isError) {
    return <h2>Sorry, something went wrong! error : {error.message}</h2>;
  }
  return (
    <div>
      <h1>Home</h1>
      <h1>{catData.fact}</h1>
      <button onClick={refetch}>Update Fact</button>
    </div>
  );
};

export default Home;

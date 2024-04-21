import React from "react";
import { useGetApi } from "../../Customs/useGetApi/useGetApi";

const CatComponent = () => {
  const { data: catData, isLoading, refetchData } = useGetApi();

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>{catData.fact}</h1>
      <button onClick={refetchData}>Update Fact</button>
    </div>
  );
};

export default CatComponent;

import React from "react";
import { useParams } from "react-router-dom";

const Posts = () => {
  const { year, month } = useParams();
  return (
    <React.Fragment>
      <h1>Posts</h1>
      <p>
        Year: {year} , Month: {month}
      </p>
    </React.Fragment>
  );
};

export default Posts;

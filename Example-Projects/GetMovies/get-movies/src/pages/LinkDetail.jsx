import React from "react";
import { useParams } from "react-router-dom";

const LinkDetail = () => {
  const { id } = useParams();

  const linkDetails = {
    1: "Details for Link 1",
    2: "Details for Link 2",
    3: "Details for Link 3",
  };

  return (
    <div>
      <h1>{linkDetails[id] || "Link not found"}</h1>
    </div>
  );
};

export default LinkDetail;

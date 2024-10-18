import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const LinkDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleSave = () => {
    navigate("/link"); // Use navigate to redirect
  };

  const linkDetails = {
    1: "Details for Link 1",
    2: "Details for Link 2",
    3: "Details for Link 3",
  };

  return (
    <div>
      <h1>{linkDetails[id] || "Link not found"}</h1>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default LinkDetail;

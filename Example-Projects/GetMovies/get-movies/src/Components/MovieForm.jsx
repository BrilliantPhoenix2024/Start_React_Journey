import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieForm = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleSave = () => {
    navigate("/movies"); // Use navigate to redirect
  };

  return (
    <div>
      <h1>{id || "Movie not found"}</h1>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default MovieForm;

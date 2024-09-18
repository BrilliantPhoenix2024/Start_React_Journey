import React, { useState } from "react";

const LikeComponent = () => {
  // Initialize the state to track whether the item is liked
  const [liked, setLiked] = useState(false);

  // Toggle the liked state when clicked
  const handleLikeClick = () => {
    setLiked(!liked);
  };

  // Determine the class name based on the liked state
  const clases = liked ? "fa fa-heart" : "fa fa-heart-o";

  return (
    <React.Fragment>
      <i className={clases} aria-hidden="true" onClick={handleLikeClick}></i>
    </React.Fragment>
  );
};

export default LikeComponent;

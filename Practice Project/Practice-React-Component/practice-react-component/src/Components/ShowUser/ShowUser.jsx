import React from "react";

const ShowUser = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>;<h2>{props.age}</h2>;<h3>{props.email}</h3>;
    </div>
  );
};

export default ShowUser;

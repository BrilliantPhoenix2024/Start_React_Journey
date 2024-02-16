import React from "react";

const ConditionalRendering2 = () => {
  const names = ["ali", "atefeh", "nazanin", "mohammad"];
  return (
    <div>
      {names.map((name, index) => {
        return <h1 key={index}>{name}</h1>;
      })}
    </div>
  );
};

export default ConditionalRendering2;

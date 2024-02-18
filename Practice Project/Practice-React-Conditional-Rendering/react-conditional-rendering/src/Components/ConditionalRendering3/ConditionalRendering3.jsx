import React from "react";

const ConditionalRendering3 = () => {
  const users = [
    { name: "ali", age: 20 },
    { name: "atefeh", age: 35 },
    { name: "nazanin", age: 25 },
    { name: "mohammad", age: 35 },
  ];
  return (
    <div>
      <div>
        {users.map((user, index) => {
          return (
            <h2 key={index}>
              {user.name} : {user.age}
            </h2>
          );
        })}
      </div>
      <div>
        {users.map((user, index) => {
          return (
            <h1 key={index}>{user.age > 30 ? <p>{user.name}</p> : null}</h1>
          );
        })}
      </div>
    </div>
  );
};

export default ConditionalRendering3;

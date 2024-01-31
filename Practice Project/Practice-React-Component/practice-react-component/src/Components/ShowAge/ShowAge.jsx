import React from "react";

const ShowAge = () => {
  const name = <h1>Atefeh</h1>;
  const age = <h2>35</h2>;
  const email = <h3>Salam@gmail.com</h3>;
  return (
    <div>
      My name is {name}. My age is {age}. my Email Address is {email}.
    </div>
  );
};

export default ShowAge;

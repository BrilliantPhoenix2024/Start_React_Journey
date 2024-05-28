import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const selector = useSelector((state) => state.user.user);
  return (
    <div>
      <h1>Home {selector.user}</h1>
    </div>
  );
};

export default Home;

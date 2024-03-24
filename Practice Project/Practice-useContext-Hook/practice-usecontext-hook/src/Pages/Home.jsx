import { React, useContext } from "react";
import { ProfileContext } from "../Context/ProfileContext";

const Home = () => {
  const { username } = useContext(ProfileContext);
  return (
    <div>
      <h1>Home Page - Usename is {username}</h1>
    </div>
  );
};

export default Home;

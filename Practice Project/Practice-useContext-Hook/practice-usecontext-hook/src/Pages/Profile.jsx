import { React, useContext } from "react";
import ChangeProfile from "../Components/ChangeProfile/ChangeProfile";
import { ProfileContext } from "../Context/ProfileContext";

const Profile = () => {
  const { username } = useContext(ProfileContext);
  return (
    <div>
      <h1>Home Page - Usename is {username}</h1>
      <ChangeProfile />
    </div>
  );
};

export default Profile;

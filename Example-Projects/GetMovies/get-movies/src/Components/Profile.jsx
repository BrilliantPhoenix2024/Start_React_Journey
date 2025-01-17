import React from "react";

const Profile = ({user}) => {
  return (
    <div>
      <h2>{user.name || "Guest"}</h2>
      {user.name ? <h2>{user.name}</h2> : <p>No user information available.</p>}
    </div>
  );
};

export default Profile;

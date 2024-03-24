import React, { useState, useContext } from "react";
import { ProfileContext } from "../../Context/ProfileContext";

const ChangeProfile = () => {
  const { setUsername } = useContext(ProfileContext);
  const [newUserName, setNewUserName] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setNewUserName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setUsername(newUserName);
        }}
      >
        Change Username
      </button>
    </div>
  );
};

export default ChangeProfile;

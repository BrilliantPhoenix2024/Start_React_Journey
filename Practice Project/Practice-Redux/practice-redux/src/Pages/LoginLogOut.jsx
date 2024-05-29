import React, { useState } from "react";
import { login, logout } from "../Store/userSlice";
import { useDispatch, useSelector } from "react-redux";

const LoginLogOut = () => {
  const [newUsername, setNewUsername] = useState("");
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.user.user);

  return (
    <div>
      <h1>Login {selector.user}</h1>
      <input
        type="name"
        placeholder="Name"
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <div>
        <button
          type="submit"
          onClick={() => dispatch(login({ user: newUsername }))}
        >
          Login
        </button>
        <button onClick={() => dispatch(logout())}>logout</button>
      </div>
    </div>
  );
};

export default LoginLogOut;

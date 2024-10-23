import React from "react";
import { Link } from "react-router-dom";

const SideBarComponent = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/posts/admin">Admin</Link>
        </li>
        <li>
          <Link to="/posts/users">Users</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBarComponent;

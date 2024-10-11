import React from "react";
import { Link } from "react-router-dom";

const LinkPage = () => {
  const links = [
    { id: 1, name: "Link 1" },
    { id: 2, name: "Link 2" },
    { id: 3, name: "Link 3" },
  ];

  return (
    <React.Fragment>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link to={`/link/${link.id}`}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default LinkPage;

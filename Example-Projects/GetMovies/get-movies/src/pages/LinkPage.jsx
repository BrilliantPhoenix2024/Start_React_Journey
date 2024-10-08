import React from "react";
import { Link } from "react-router-dom";

const LinkPage = () => {
  return (
    <div>
      <ul>
        <li><Link>Link 1 </Link></li>
        <li><Link>Link 2 </Link></li>
        <li><Link>Link 3 </Link></li>
      </ul>
    </div>
  );
};

export default LinkPage;

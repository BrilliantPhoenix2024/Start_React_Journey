import React from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";
import SideBarComponent from "../Components/SideBarComponent";
import AdminContent from "../Components/Admin";
import UserContent from "../Components/Users";

const Posts = () => {
  // const { year, month } = useParams();

  return (
    <React.Fragment>
      <h1>Posts</h1>
      {/* <p>
        Year: {year} , Month: {month}
      </p> */}
      <SideBarComponent />

      <Routes>
        <Route path="admin" element={<AdminContent />} />
        <Route path="users" element={<UserContent />} />
      </Routes>
    </React.Fragment>
  );
};

export default Posts;

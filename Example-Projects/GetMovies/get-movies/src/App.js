import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./Components/NavbarComponent.jsx";
import Movies from "./Components/Movies";
import Customers from "./Components/Customers.jsx";
import Rentals from "./Components/Rentals";
import MovieForm from "./Components/MovieForm";
import LoginForm from "./Components/LoginForm";
import RegisterForm from "./Components/RegisterForm.jsx";
import PostsComponent from "./Components/PostsComponent.jsx";
import Logout from "./Components/Logout.jsx";
import { jwtDecode } from "jwt-decode";
import Profile from "./Components/Profile.jsx";

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      if (jwt) {
        const decodedUser = jwtDecode(jwt);
        setUser(decodedUser);
      }
    } catch (error) {
      console.error("Failed to decode JWT:", error);
    }
  }, []);

  return (
    <Router>
      <NavbarComponent user={user} />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/customers" element={<Customers />} />
        {/* Dynamic Route for Link Details */}
        <Route path="/movies/new" element={<MovieForm />} />
        <Route path="/movies/:id" element={<MovieForm />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/posts" element={<PostsComponent />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;

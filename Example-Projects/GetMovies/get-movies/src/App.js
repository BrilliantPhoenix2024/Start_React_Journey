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
import Profile from "./Components/Profile.jsx";
import LogoutForm from "./Components/LogoutForm.jsx";
import auth from "./services/authService.js";
import ProtectedRoute from "./Components/common/protectedRoute";

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const user = auth.getCurrentUser();
    setUser(user);
  }, []);

  return (
    <Router>
      <NavbarComponent user={user} />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/customers" element={<Customers />} />
        {/* Dynamic Route for Link Details */}
        <Route
          path="/movies/new"
          element={
            <ProtectedRoute>
              <MovieForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/movies/:id"
          element={
            <ProtectedRoute>
              <MovieForm />
            </ProtectedRoute>
          }
        />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/logout" element={<LogoutForm />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/posts" element={<PostsComponent />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;

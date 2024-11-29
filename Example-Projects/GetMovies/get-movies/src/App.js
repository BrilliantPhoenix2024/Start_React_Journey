import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./Components/NavbarComponent.jsx";
import Movies from "./Components/Movies";
import Customers from "./Components/Customers.jsx";
import Rentals from "./Components/Rentals";
import MovieForm from "./Components/MovieForm";
import LoginForm from "./Components/LoginForm";
import RegisterForm from "./Components/RegisterForm.jsx";

const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/customers" element={<Customers />} />
        {/* Dynamic Route for Link Details */}
        <Route path="/movies/new" element={<MovieForm />} />
        <Route path="/movies/:id" element={<MovieForm />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;

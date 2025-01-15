// src/components/Logout.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user session (adjust based on your auth logic)
    localStorage.removeItem("token"); // or sessionStorage, or cookies
    navigate("/login"); // Redirect to login page
  }, [navigate]);

  return null; // No UI needed
};

export default Logout;

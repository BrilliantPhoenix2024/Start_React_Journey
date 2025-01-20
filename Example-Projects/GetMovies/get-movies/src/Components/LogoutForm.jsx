// Logout.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../services/authService";

const LogoutForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    auth.logoutUser();
    navigate("/login");
  }, [navigate]);

  return null;
};

export default LogoutForm;

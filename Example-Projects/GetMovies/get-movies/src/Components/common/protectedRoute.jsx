import React from "react";
import { Navigate } from "react-router-dom";
import auth from "../../services/authService";

const ProtectedRoute = ({ children }) => {
  const user = auth.getCurrentUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

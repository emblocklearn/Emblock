import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './Authcontext'; // Import the context

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext); // Get login state

  // If not logged in, redirect to login page
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children; // If logged in, allow access to protected route
};

export default ProtectedRoute;

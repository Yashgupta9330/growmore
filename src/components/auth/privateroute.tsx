import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
  const userData = localStorage.getItem('userData');

  if (userData !== null) {
    // If user data exists in localStorage, render the children
    return <>{children}</>;
  } else {
    // If no user data exists, redirect to the home page
    alert("Please Enter your Credentials to Access the Data");
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;

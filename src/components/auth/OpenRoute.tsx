import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserData } from '../../types/Userdata';
// Adjust the path as necessary

function OpenRoute({ children }: { children: React.ReactNode }) {
  const dataString = localStorage.getItem('userData');
  const data: UserData | null = dataString ? JSON.parse(dataString) as UserData : null;

  if (data === null) {
    return children;
  } else {
    return <Navigate to="/post" />;
  }
}

export default OpenRoute;

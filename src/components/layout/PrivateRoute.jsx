import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const token = localStorage.getItem('token');  // Vérifie si le token est stocké dans localStorage
  const user = JSON.parse(localStorage.getItem('user'));
  return token ? (user.statut? <Outlet /> : < Navigate to='/pending-page'/>) :<Navigate to="/login" />;
};

export default PrivateRoute;
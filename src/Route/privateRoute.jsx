import React from 'react';
import { Navigate } from 'react-router-dom';

const privateRoute = ({ children, roleRequired }) => {
  const token = localStorage.getItem('token');
  const profil = JSON.parse(localStorage.getItem('profil') || '{}');
  const userRole = profil.role?.nomRole;

  if (!token) {
    // non connecté
    return <Navigate to="/connexion" replace />;
  }

  if (roleRequired && userRole !== roleRequired) {
    // connecté mais pas autorisé
    return <Navigate to="/dashboard/accueil" replace />;
  }

  return children;
};

export default privateRoute;

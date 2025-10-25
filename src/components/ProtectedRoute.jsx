import React from 'react'
import { useAuth } from '../hooks/Provider';
import { Navigate } from 'react-router';

export const ProtectedRoute = ({children}) => {
    const { login } = useAuth();
  return (login ? children : <Navigate to="/" />);
}

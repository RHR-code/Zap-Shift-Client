import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useAuth();
  if (loading)
    return (
      <div className="flex items-center justify-center w-full h-full">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  if (user) {
    return children;
  }
  return <Navigate to="/" />;
};

export default PrivateRoute;

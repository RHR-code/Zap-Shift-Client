import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useAuth();
  const { pathname } = useLocation();
  console.log(pathname, user);

  if (loading)
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  if (user) {
    return children;
  }
  return <Navigate state={pathname} to="/login" />;
};

export default PrivateRoute;

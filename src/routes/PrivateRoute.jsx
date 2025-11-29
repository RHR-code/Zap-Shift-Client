import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/Loading";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useAuth();
  const { pathname } = useLocation();
  console.log(pathname, user);

  if (loading) return <Loading />;
  if (user) {
    return children;
  }
  return <Navigate state={pathname} to="/login" />;
};

export default PrivateRoute;

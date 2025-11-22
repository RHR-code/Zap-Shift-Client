import React from "react";
import Logo from "../components/logo/Logo";
import authImage from "../assets/authImage.png";
import { Outlet } from "react-router";
const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <Logo />
      <div className="flex items-start pt-20  h-dvh">
        <div className="flex-1  flex items-center justify-center">
          <Outlet />
        </div>
        <div className="flex-1 flex items-center">
          <img src={authImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

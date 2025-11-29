import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialSignIn from "../SocialSignIn/SocialSignIn";

const Login = () => {
  const { userLogin } = useAuth();

  const { state } = useLocation();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    userLogin(data.email, data.password)
      .then((data) => {
        navigate(state ? state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="w-3/4">
      <h1 className="font-extrabold text-[42px]">Welcome Back</h1>
      <p className="text-base font-medium py-5">Login with ZapShift</p>
      <form onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input w-full"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required</p>
          )}
          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
            className="input w-full"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be 6 character or longer
            </p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4 w-full">Login</button>
          <SocialSignIn />
          <div>
            <p>
              New to ZapShift?
              <Link
                state={state}
                to="/register"
                className="text-blue-500 underline"
              >
                Register
              </Link>
            </p>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;

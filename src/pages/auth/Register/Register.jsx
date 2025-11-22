import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import SocialSignIn from "../SocialSignIn/SocialSignIn";

const Register = () => {
  const { userRegister } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegister = (data) => {
    userRegister(data.email, data.password)
      .then((data) => {
        console.log(data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-3/4">
      <h1 className="font-extrabold text-[42px]">Create an Account</h1>
      <p className="text-base font-medium py-5">Register with ZapShift</p>
      <form onSubmit={handleSubmit(handleRegister)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email")}
            className="input w-full"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required</p>
          )}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              minLength: 6,
              pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
            })}
            className="input w-full"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be more than 6 character or more
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              The password should have at least one uppercase , one lowercase
              and one digit
            </p>
          )}

          <button className="btn btn-neutral mt-4 w-full  ">Register</button>
          <SocialSignIn />
          <div>
            <p>
              Already have an account?
              <Link to="/login" className="text-blue-500 underline">
                Login
              </Link>
            </p>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;

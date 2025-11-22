import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import SocialSignIn from "../SocialSignIn/SocialSignIn";
import axios from "axios";

const Register = () => {
  const { userRegister, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegister = (data) => {
    console.log();
    const userImage = data.photo[0];
    userRegister(data.email, data.password)
      .then((response) => {
        // 1. store the image in form data
        const formData = new FormData();
        formData.append("image", userImage);
        // 2. send it to imgbb and get the url
        const imgbbUrl = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host_key
        }`;
        axios
          .post(imgbbUrl, formData)
          .then((res) => {
            console.log(res.data);
            const userProfile = {
              displayName: data.name,
              photoURL: res.data.data.image.url,
            };
            // update the profile
            updateUserProfile(userProfile)
              .then(() => {
                console.log("profile updated");
              })
              .catch((error) => {
                console.log(error.message);
              });
          })
          .catch((error) => {
            console.log(error.message);
          });
        console.log("after Registration", response.user);
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
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name")}
            className="input w-full"
            placeholder="Your Name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500">name is required</p>
          )}
          <label className="label">Upload Photo</label>
          <input
            type="file"
            {...register("photo")}
            className="file-input file-input-neutral"
            placeholder="Your Photo"
          />
          {errors.photo?.type === "required" && (
            <p className="text-red-500">photo is required</p>
          )}
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

import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";
const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
});
const useAxiosSecure = () => {
  const { user, userLogout } = useAuth();

  useEffect(() => {
    const reqInterceptor = axiosSecure.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${user?.accessToken}`;
      return config;
    });
    const resInterceptor = axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("from error", error);
        const statusCode = error.status;
        if (statusCode === 401 || statusCode === 403) {
          userLogout().then(() => {
            console.log("unaothorized access");
          });
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosSecure.interceptors.request.eject(reqInterceptor);
      axiosSecure.interceptors.response.eject(resInterceptor);
    };
  }, [user, userLogout]);

  return axiosSecure;
};

export default useAxiosSecure;

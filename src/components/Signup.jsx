import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "./AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const {authuser, setauthUser} = useAuth(); // ✅ array destructuring
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post(
        "http://localhost:4001/api/user/signup",
        userInfo
      );

      const { user } = response.data; // extract only user object
      if (user) {
        alert("Signup successfully done!");
        localStorage.setItem("messenger", JSON.stringify(user));
        setauthUser(user);
        navigate("/query"); // redirect to chatbot
      }
    } catch (error) {
      console.log(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="border-2 border-black px-6 py-3 rounded-md w-[30rem]"
      >
        <h1 className="text-blue-600 font-semibold text-2xl">Messenger</h1>
        <h1 className="text-2xl text-center">
          Create a new{" "}
          <span className="text-blue-600 font-semibold">Account!</span>
        </h1>
        <br />
        <div className="space-y-6 ml-[4rem]">
          <div className="username flex flex-col">
            <label className="input validator rounded-[5px] focus-within:outline-none focus-within:ring-0 focus-within:border-none">
              <input
                type="text"
                placeholder="Fullname"
                {...register("fullname", { required: true })}
              />
            </label>
            {errors.fullname && (
              <span className="text-red-500 text-[10px] mt-1">
                **This field is required
              </span>
            )}
          </div>

          <div className="email flex flex-col">
            <label className="input validator rounded-[5px] focus-within:outline-none focus-within:ring-0 focus-within:border-none">
              <input
                type="email"
                placeholder="mail@site.com"
                {...register("email", { required: true })}
              />
            </label>
            {errors.email && (
              <span className="text-red-500 text-[10px] mt-1">
                **This field is required
              </span>
            )}
          </div>

          <div className="password flex flex-col">
            <label className="input validator rounded-[5px] focus-within:outline-none focus-within:ring-0 focus-within:border-none">
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </label>
            {errors.password && (
              <span className="text-red-500 text-[10px] mt-1">
                **This field is required
              </span>
            )}
          </div>

          <input
            type="submit"
            value="Signup"
            className="p-1 text-white font-bold cursor-pointer border-0 w-full bg-blue-800 rounded-[5px]"
          />

          <h1 className="text-center text-[15px] mt-[7px]">
            Already have an account?{" "}
            <Link to={"/login"} className="text-blue-900 font-bold">
              Login
            </Link>
          </h1>
        </div>
      </form>
    </div>
  );
};

export default Signup;

import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const { setAuthUser } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

const onSubmit = async (data) => {
  try {
    const response = await axios.post("http://localhost:5004/api/user/login", {
      email: data.email,
      password: data.password,
    });

    if (response.data?.user) {
      const { user } = response.data;
      setAuthUser(user); // save in context
      localStorage.setItem("messenger", JSON.stringify(user));
      navigate("/query"); // redirect to chatbot
    }
  } catch (error) {
    console.error("Login failed:", error.response?.data || error);
    alert(error.response?.data?.error || "Login failed");
  }
};



  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-2 border-black px-6 py-3 rounded-md bg-white shadow-lg"
      >
        <h1 className="text-blue-600 font-semibold text-2xl text-center">
          Messenger
        </h1>
        <h2 className="text-2xl text-center mb-4">
          Login your
          <span className="text-blue-600 font-semibold"> Account!</span>
        </h2>

        <div className="space-y-4">
          {/* Email */}
          <div className="email">
            <label className="input validator rounded-[5px] focus-within:outline-none focus-within:ring-0 focus-within:border-none flex items-center border p-2">
              <svg
                className="h-5 opacity-50 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                placeholder="mail@site.com"
                {...register("email", { required: true })}
                className="flex-1 outline-none"
              />
            </label>
            {errors.email && (
              <span className="text-red-500 text-[10px] mt-1 block">
                **This field is required
              </span>
            )}
          </div>

          {/* Password */}
          <div className="password">
            <label className="input validator rounded-[5px] focus-within:outline-none focus-within:ring-0 focus-within:border-none flex items-center border p-2">
              <svg
                className="h-5 opacity-50 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
                className="flex-1 outline-none"
              />
            </label>
            {errors.password && (
              <span className="text-red-500 text-[10px] mt-1 block">
                **This field is required
              </span>
            )}
          </div>

          {/* Submit */}
          <input
            type="submit"
            value="Login"
            className="p-1 text-white font-bold cursor-pointer border-0 w-full bg-blue-800 rounded-[5px]"
          />

          <h1 className="text-center text-[15px] mt-[7px]">
            Don't have an account?{" "}
            <Link to={"/signup"}
              className="text-blue-900 font-bold cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Signup
            </Link>
          </h1>
        </div>
      </form>
    </div>
  );
};

export default Login;

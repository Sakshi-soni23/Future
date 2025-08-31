import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "./AuthProvider";
import { Link } from "react-router-dom";


const Signup = () => {
  const {authuser,setauthUser} = useAuth()
  console.log(authuser);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

const onSubmit =  async (data) => {
  const userInfo = {
    fullname: data.fullname,
    email: data.email,
    password: data.password,
  };

await axios
    .post("/api/user/signup", userInfo)
    .then((response) => {
      console.log(response.data);
      if(response.data){
        alert("Signup Successfully done !!!");

      }
      localStorage.setItem("messenger",JSON.stringify(response.data));
      setauthUser(response.data);
    })
    .catch((error) => {
      console.log(error.response?.data?.message || "Something went wrong");
    });
};
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="border-2 border-black px-6 py-3 rounded-md w-[30rem]"
        >
          <h1 className="text-blue-600 font-semibold text-2xl">Messenger</h1>
          <h1 className="text-2xl text-center">
            Crearte a new{" "}
            <span className="text-blue-600 font-semibold">Account!</span>
          </h1>
          <br />
          <div className="space-y-6 ml-[4rem]">
            <div className="username flex flex-col">
              <label className="input validator rounded-[5px] focus-within:outline-none focus-within:ring-0 focus-within:border-none">
                <svg
                  className="h-[1em] opacity-50"
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
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </g>
                </svg>
                <input
                  type="text"
                 
                  placeholder="fullname"
                 
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
                <svg
                  className="h-[1em] opacity-50"
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
                <svg
                  className="h-[1em] opacity-50"
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
                />
              </label>{" "}
              {errors.password && (
                <span className="text-red-500  text-[10px] mt-1">
                  **This field is required
                </span>
              )}
            </div>

            {/* buttos */}
            <input
              type="submit"
              value="Signup"
              placeholder="Signup"
              className="p-1 text-white font-bold cursor-pointer border-0 w-full bg-blue-800 rounded-[5px]"
            />
            <h1 className="text-center text-[15px] mt-[7px]">
              Have you account?{" "}
              <Link to={"/login"} className="text-blue-900 font-bold">login</Link>
            </h1>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;

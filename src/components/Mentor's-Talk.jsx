import React from "react";
import { Route, Routes } from "react-router-dom";
import Left from "./Left";
import Right from "./Right";
import Logout from "./Logout";
import Login from "./Login";
import { useAuth } from "./AuthProvider";
import Signup from "./Signup";

const Query = () => {
  const { authuser } = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={
          authuser ? (
            <div className="flex h-screen">
              <Logout />
              <Left />
              <Right />
            </div>
          ) : (
          
            <Signup/>
          )
        }
      />
    </Routes>
  );
};

export default Query;

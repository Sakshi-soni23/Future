import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Left from "./Left";
import Right from "./Right";
import Logout from "./Logout";
import Login from "./Login";
import Signup from "./Signup";
import { useAuth } from "./AuthProvider";

const Query = () => {
  const { authUser } = useAuth(); // use correct case

  return (
    <Routes>
      {/* Default route "/" shows chat layout if logged in, otherwise redirect to login */}
      <Route
        path="/"
        element={
          authUser ? (
            <div className="flex h-screen">
              <Logout />
              <Left />
              <Right />
            </div>
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Signup page */}
      <Route path="/signup" element={<Signup />} />

      {/* Login page */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Query;

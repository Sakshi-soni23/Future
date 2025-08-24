import React from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import User from"./User";
import Left from"./Left";
import Right from"./Right";
import Search from "./Search";
import Logout from "./Logout";


const Query = () => {
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="main flex h-screen">
        <Logout/>
        <Left />
        <Right />
      </div>
      
    </>
  );
};

export default Query;

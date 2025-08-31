
import React, { useState } from 'react'
import { CiLogout } from "react-icons/ci";
import axios from 'axios';
import Cookies from 'js-cookie';

const Logout = () => {
  const [loading ,setLoading] = useState(false);
  const handlelogout = async () =>{
    setLoading(true);
    try {
   const res =   await axios.post("/api/user/logout");
   localStorage.removeItem("messenger");
   Cookies.remove("jwt");
   setLoading(false);
   alert("Logout Successfully");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="right  w-[5%] bg-[#051327] text-white cursor-pointer flex flex-col justify-end">
        <div className="px-4 py-5">
          <label className="input px-3 bg-slate-800">
            <CiLogout cursor={"pointer"} onClick={handlelogout}/>
          </label>
        </div>
      </div>
    </>
  );
}

export default Logout
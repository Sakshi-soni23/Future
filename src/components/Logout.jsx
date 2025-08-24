import React from 'react'
import { CiLogout } from "react-icons/ci";

const Logout = () => {
  return (
    <>
      <div className="right  w-[5%] bg-[#051327] text-white cursor-pointer flex flex-col justify-end">
        <div className="px-4 py-5">
          <label className="input px-3">
            <CiLogout cursor={"pointer"}/>
          </label>
        </div>
      </div>
    </>
  );
}

export default Logout
import React from 'react'
import { CiSearch } from "react-icons/ci";
const Search = () => {
  return (
    <>
      <div className="serach px-[20px] py-4 ">
        <label className="input px-3 bg-slate-700 text-white">
          <input type="search" required placeholder="Search" />
          <CiSearch color="white" />
        </label>
      </div>
    </>
  );
}

export default Search
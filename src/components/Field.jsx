import React from "react";
import { MdArrowBack } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import multimedia from "./multimedia";
import MenuItem from "./MenuItem"; // Corrected import
import ambani from "./images/ambani.jpg";
import virat from "./images/virat.jpg";
import google from "./images/google.jpg";
import vinita from "./images/vinita.jpg";
const Field = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="field-navbar flex justify-around items-center text-center bg-[#DBFFCB] h-[50px] cursor-pointer text-black">
        <div className=" justify-around text-center ml-[-18rem] flex items-center gap-2 ">
          <div className="back max-[900px]:ml-[10rem]" onClick={handleGoBack}>
            <MdArrowBack />
          </div>
          <h1 className="max-[900px]:ml-[10rem]">Fields</h1>
        </div>
        <nav className="field-nav max-[700px]:hidden">
          <ul className="field-ul flex gap-[2rem] mt-[10px] cursor-pointer">
            {multimedia.map((menu, index) => (
              <MenuItem items={menu} key={index} />
            ))}
          </ul>
        </nav>
      </div>
      <div className="below-part cursor-pointer">
        {/* <img src={} alt="" className="w-[98rem] h-[93vh]" /> */}
        <div className="heading font-sans text-center font-bold text-[2em] mt-[5em]">
          <h1>
            "The future belongs to those who choose with courage, not with
            fear."
          </h1>
        </div>
        <div className="img flex justify-center  gap-[60px] mt-[5rem] ">
          <img
            src={ambani}
            alt=""
            className="w-[18rem] h-[13rem] rounded-2xl hover:border-4 border-black"
          />
          <img
            src={vinita}
            alt=""
            className="w-[18rem] h-[13rem] rounded-2xl hover:border-4 border-black"
          />
          <img
            src={virat}
            alt=""
            className="w-[18rem] h-[13rem] rounded-2xl hover:border-4 border-black"
          />
          <img
            src={google}
            alt=""
            className="w-[18rem] h-[13rem] rounded-2xl hover:border-4 border-black"
          />
        </div>
      </div>
    </>
  );
};

export default Field;

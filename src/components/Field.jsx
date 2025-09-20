import React from "react";
import { MdArrowBack } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import multimedia from "./multimedia";
import MenuItem from "./MenuItem";
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
      {/* Navbar */}
      <div className="field-navbar flex justify-between items-center bg-[#DBFFCB] h-[60px] px-6 md:px-16 text-black shadow-md">
        {/* Back + Title */}
        <div className="flex items-center gap-3">
          <button
            className="p-2 rounded-full hover:bg-green-200 transition"
            onClick={handleGoBack}
          >
            <MdArrowBack size={22} />
          </button>
          <h1 className="text-lg md:text-xl font-semibold">Fields</h1>
        </div>

        {/* Nav Menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {multimedia.map((menu, index) => (
              <MenuItem items={menu} key={index} />
            ))}
          </ul>
        </nav>
      </div>

      {/* Quote Section */}
      <div className="text-center mt-16 px-4">
        <h1 className="font-sans font-bold text-2xl md:text-3xl text-gray-800 italic">
          "The future belongs to those who choose with courage, not with fear."
        </h1>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 px-6 md:px-20 place-items-center">
        {[ambani, vinita, virat, google].map((img, index) => (
          <div
            key={index}
            className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer w-[18rem] h-[13rem] sm:w-[15rem] sm:h-[10rem] md:w-[18rem] md:h-[13rem] transition-all duration-300"
          >
            {/* Image */}
            <img
              src={img}
              alt={`field-${index}`}
              className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
            />
            {/* Overlay Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">Explore</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Field;

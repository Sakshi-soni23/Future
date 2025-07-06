import React from "react";
import { NavLink } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import "./Navbar.css";
import bgImage from "./images/bg.avif";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import aboutimg from "./images/about.jpg";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import mentor from "./images/mento1.jpg";
import men2 from "./images/men2.jpg";
import men3 from "./images/men3.jpg";
import { CiLinkedin } from "react-icons/ci";

const Navbar = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
  }, []);

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          layout:
            window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
          autoDisplay: false,
          includedLanguages: "en,hi,fr,de,es,ja,zh,ru,ko,ar,it,pt",
        },
        "google_translate_element"
      );
    };

    addGoogleTranslateScript();
  }, []);
  
  return (
    <>
      <nav className=" main-nav">
        <div className="title">
          <h1>
            <span>F</span>uture-
            <span>G</span>uide
          </h1>
        </div>
        <div className="menu-links col-span-[3/4] flex justify-around  max-[900px]:bg-amber-700 ">
          <NavLink className="text-center" to={"/"}>
            Home <span className=""></span>
          </NavLink>
          <NavLink className="" to={"/Field"}>
            Field <span className=""></span>
          </NavLink>
          <NavLink className="" to={"/Ques"}>
            Q&A Hub <span className=""></span>
          </NavLink>
          <NavLink className="" to={"/Query"}>
            Query <span className=""></span>
          </NavLink>
          <NavLink className="" to={"/FeedBack"}>
            FeedBack <span className=""></span>
          </NavLink>
          <NavLink className="side-icon ">
            <PiDotsThreeOutlineVerticalLight />
          </NavLink>
          {/* <div id="google_translate_element" className="ml-4"></div> */}
        </div>
      </nav>
      <section className="">
        {bgImage ? (
          <img
            src={bgImage}
            alt="Background"
            className="main-img ml-[15rem] mt-[59px]
    w-[63rem]
    h-[67vh]  cursor-pointer  max-[1000px]:ml-[91px]
     max-[1000px]:w-[56rem]"
          />
        ) : null}
        <h1 className=" head -mt-[27rem] ml-[53rem]  w-[21rem] max-[1000px]:ml-[35rem] max-[1000px]:-mt-[25rem]">
          Shape Your Future By Choosing Correct Path Today !!
        </h1>
      </section>
      <div
        className="about bg-transparent w-[100%] h-[30rem] text-black"
        data-aos="fade-up"
        data-aos-duration="3000"
        data-aos-delay="1000"
      >
        <h1 className="mt-[24rem] ml-[41rem] text-[3rem]">ABOUT</h1>
        <div className="container-about">
          <div className="about-detail">
            <h1 className=" text-[19px] font-serif text-center">
              🌟 "Learning is an adventure—every click opens a new world of fun
              and discovery!"
            </h1>
            <p className="text-[15px] ml-[33em] leading-[45px]">
              Here We are Providing a Guide to Help you all to take a steps
              towards yout Gaols.
            </p>
            <div className="under-detail flex justify-self-start gap-[18rem]">
              <img
                src={aboutimg}
                alt=""
                className="h-[26rem] w-[45rem] ml-[39px] mt-[47px]"
                data-aos="fade-right"
                data-aos-duration="5000"
              />
              <h1 className="text-[31px] font-serif -ml-[111px] w-[29rem] mt-[87px]">
                We are Providing a mentor video and if you choice path then
                mentor provide u to roadmap.
              </h1>
            </div>
          </div>
        </div>
        <div
          className="h-[40rem] bg-amber-600 mt-[77px]"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="1000"
        >
          <span
            className=" text-[80px] ml-[37rem]"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            Mentor's
          </span>
          <div className="mentors-info cursor-pointer">
            <div className="first-mentor flex justify-around  gap-[9px]">
              <ul>
                <li>
                  <img
                    src={men3}
                    alt=""
                    className="rounded-[50%] border-3 border-black w-[100px] h-[95px]"
                  />
                  <h1 className="ml-[11px] text-[20px] leading-[45px]">
                    Vijay Kumar
                  </h1>
                  <p className="-ml[22px]">Data Scienctist in Google</p>
                  <span className="text-[11px] ml-[15px]">
                    6 year Experienced
                  </span>
                </li>
              </ul>
              <ul>
                <li>
                  <img
                    src={men2}
                    alt=""
                    className="rounded-[50%] border-3 border-black w-[100px] h-[95px]"
                  />
                  <h1 className="ml-[11px] text-[20px] leading-[45px]">
                    priya tiwari
                  </h1>
                  <p className="-ml[22px]">AI expert in Microsoft</p>
                  <span className="text-[11px] ml-[15px]">
                    5 year Experienced
                  </span>
                </li>
              </ul>
              <ul>
                <li>
                  <img
                    src={mentor}
                    alt=""
                    className="rounded-[50%] border-3 border-black w-[100px] h-[95px]"
                  />
                  <h1 className="ml-[0px] text-[20px] leading-[45px]">
                    Rony Roy
                  </h1>
                  <p className="-ml[22px]">Graphic Designer</p>
                  <span className="text-[11px] ml-[15px]">
                    8 year Experienced
                  </span>
                </li>
              </ul>
            </div>
            <div className="seconf-mentor flex justify-around gap-[19px] mt-[60px]">
              <ul>
                <li>
                  <img
                    src={mentor}
                    alt=""
                    className="rounded-[50%] border-3 border-black w-[100px] h-[95px]"
                  />
                  <h1 className="ml-[0px] text-[20px] leading-[45px]">
                    Rony Roy
                  </h1>
                  <p className="-ml[22px]">Graphic Designer</p>
                  <span className="text-[11px] ml-[15px]">
                    8 year Experienced
                  </span>
                </li>
              </ul>
              <ul>
                <li>
                  <img
                    src={mentor}
                    alt=""
                    className="rounded-[50%] border-3 border-black w-[100px] h-[95px]"
                  />
                  <h1 className="ml-[0px] text-[20px] leading-[45px]">
                    Rony Roy
                  </h1>
                  <p className="-ml[22px]">Graphic Designer</p>
                  <span className="text-[11px] ml-[15px]">
                    8 year Experienced
                  </span>
                </li>
              </ul>
              <ul>
                <li>
                  <img
                    src={mentor}
                    alt=""
                    className="rounded-[50%] border-3 border-black w-[100px] h-[95px]"
                  />
                  <h1 className="ml-[0px] text-[20px] leading-[45px]">
                    Rony Roy
                  </h1>
                  <p className="-ml[22px]">Graphic Designer</p>
                  <span className="text-[11px] ml-[15px]">
                    8 year Experienced
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

  <div className="footer fixed bottom-0 w-full bg-black text-white py-6 px-10">
  <div className="footer-contain flex justify-around">
    {/* Experienced Mentors */}
    <div className="footer-main">
      <h1 className="text-[16px] font-light mb-[20px]">Experienced Mentors</h1>
      <ul className="text-[12px] leading-[23px]">
        <li className="hover:text-gray-300">Ritesh Agarwal</li>
        <li className="hover:text-gray-300">Ritesh Agarwal</li>
        <li className="hover:text-gray-300">Ritesh Agarwal</li>
        <li className="hover:text-gray-300">Ritesh Agarwal</li>
      </ul>
    </div>

    {/* Facilities */}
    <div className="footer-main">
      <h1 className="text-[16px] font-light mb-[20px]">Facilities</h1>
      <ul className="text-[12px] leading-[23px]">
        <NavLink to="/Query"><li className="hover:text-gray-300">Mentor's Talk</li></NavLink>
        <NavLink to="/Ques"><li className="hover:text-gray-300">Q&A Hub</li></NavLink>
        <NavLink to="/Field"><li className="hover:text-gray-300">All Fields</li></NavLink>
        <NavLink to="/FeedBack"><li className="hover:text-gray-300">Feedback</li></NavLink>
      </ul>
    </div>

    {/* Student Benefits */}
    <div className="footer-main">
      <h1 className="text-[16px] font-light mb-[20px]">Students Benefits</h1>
      <ul className="text-[12px] leading-[23px]">
        <li className="hover:text-gray-300">Learn about your interest</li>
        <li className="hover:text-gray-300">Free to talk</li>
        <li className="hover:text-gray-300">No registration needed</li>
        <li className="hover:text-gray-300">Easily find your path</li>
      </ul>
    </div>
  </div>

  {/* Social Links in Bottom Right */}
  <div className="fixed bottom-[-82rem] left-[53px] flex gap-[30px]">
    {/* LinkedIn */}
    <a href="https://www.linkedin.com/in/sakshi-soni91/details/featured/" target="_blank" rel="noopener noreferrer">
      <CiLinkedin size={35} className="text-white hover:text-blue-500" />
    </a>

    {/* Instagram - Replace with your friend's profile */}
    <a href="https://www.instagram.com/friend_username" target="_blank" rel="noopener noreferrer">
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="w-[35px] h-[35px] rounded-full hover:opacity-80" />
    </a>
    <h2 className="ml-[61rem]">TAKE A STEP TOWARDS YOUR DREAM</h2>
  </div>
</div>

        </div>
    </>
  );
};

export default Navbar;

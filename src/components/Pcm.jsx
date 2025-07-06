import React from 'react';
import "./Pcm.css";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import pcmimg from "./images/pcm.avif";
import eleimg from "./images/elextrical.avif";
import civilimg from "./images/civil.avif";
import mechanicalimg from "./images/mechanical.avif";
import computerimg from "./images/computer.avif";
const Pcm = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  useEffect (()=>{
Aos.init({ duration: 1000, once: false });
  },[])
  
  return (
    <>
      <div className="main-pcm flex justify-evenly align-middle text-center bg-[#9EDF9C] w-[100rem]">
        <div
          className="back -ml-[22rem] mt-[2rem] max-[1000px]:ml-[6rem] max-[1000px]:mt-[1rem]"
          onClick={handleGoBack}
        >
          <MdArrowBack className="max-[1000px]:size-[2rem]" />
        </div>
        <div
          className="pcm-head mt-[20px] mx-[30px] mb-[30px]"
          data-aos="fade-down-right"
        >
          <h1 className="text-black text-[35px]  max-[1000px]:mr-[23rem] max-[1000px]:text-[20px] max-[1000px]:font-bold">
            WELCOME TO PCM PAGE
          </h1>
          <span className="max-[1000px]:hidden font-[Times_New_Roman]">
            Diverse Excciting Opportunities in Engineering , Technology and more
            after Physic , Chemistry ,Math
          </span>
        </div>
      </div>
      <div className="choice-pcm max-[1000px]:ml-[20rem]">
        <h1 className="question max-[1000px]:text-[20rem]">
          why to choose pcm?
        </h1>
        <li className="ans max-[1000px]:text-[40rem] mt-0 mx-[116px] mb-[7px] text-[19px]">
          Wide Career Opportunities: – Opens doors to engineering, architecture,
          computer science, data science, and more.
        </li>
        <li className="ans mt-0 mx-[116px] mb-[7px] text-[19px]">
          Strong Analytical Skills: – Enhances problem-solving, logical
          thinking, and analytical reasoning abilities.
        </li>
        <li className="ans mt-0 mx-[116px] mb-[7px] text-[19px]">
          Competitive Exam Preparation: – Required for exams like JEE, NDA,
          NATA, and other technical entrance tests.
        </li>
        <li className="ans mt-0 mx-[116px] mb-[7px] text-[19px]">
          Gateway to Prestigious Careers: – Essential for careers in technology,
          research, space science, and defense services.
        </li>
      </div>

      <div
        className="card1  card relative hover:shadow-[15px_9px_46px_7px_#526E48] flex justify-items-start gap-[73px] border-2 border-black w-[42rem] ml-[12rem] mt-[35px] rounded-2xl
         cursor-pointer overflow-hidden max-[1000px]:flex-col max-[1000px]:h-auto max-[1000px]:w-[20rem] 
             max-[1000px]:rounded-[10px] max-[1000px]:ml-[20rem] max-[1000px]:gap-[10px] max-[1000px]:items-center"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="pcmimg">
          <img
            src={computerimg}
            alt=""
            className="pcm-img w-[56vh] h-[17rem] rounded-[10px] my-[30px] mx-[24px] mb-[19px] max-[1000px]:w-[40vh] max-[1000px]:h-[12rem] max-[1000px]:my-[15px]"
          />
        </div>
        <div className="cards-detail">
          <h1 className="title text-[30px] text-center font-serif max-[1000px]:text-[20px] max-[1000px]:mt-[10px]">
            Computer Science
          </h1>
          <p className="detail -mt-[15px] max-[1000px]:hidden">
            <li className="text-[16px] ml-[1px]">
              Focuses on designing, developing, and maintaining computer
              software and systems.
            </li>
            <li className="text-[16px] ml-[1px]">
              Combines principles of programming, mathematics, and
              problem-solving.
            </li>
            <li className="text-[16px] ml-[1px]">
              Plays a key role in emerging fields like artificial intelligence,
              cybersecurity, and cloud computing.
            </li>
            <li className="text-[16px] ml-[1px]">
              Involves understanding both hardware and software interactions.
            </li>
            <li className="text-[16px] ml-[1px]">
              Drives innovation through technologies like machine learning,
              blockchain, and big data
            </li>
          </p>
        </div>
        <div className="card-btn flex justify-center items-center absolute top-0 -right-[500px] transition-all duration-[2000ms] cursor-pointer group-hover:right-4">
          <Link to={"https://en.wikipedia.org/wiki/Computer_science"}>
            <button
              className="btn border-2 rounded-2xl border-black w-[122px] p-3 -ml-[24rem] cursor-pointer
    mt-[10rem] bg-[#62825D] max-[1000px]:ml-[-10rem]"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
      <div
        className="card2  card flex hover:shadow-[15px_9px_46px_7px_#526E48] relative justify-items-start gap-[73px] border-2 border-black w-[42rem] ml-[44rem] mt-[35px] rounded-2xl cursor-pointer overflow-hidden max-[1000px]:flex-col max-[1000px]:h-auto max-[1000px]:w-[20rem] 
             max-[1000px]:rounded-[10px] max-[1000px]:ml-[20rem] max-[1000px]:gap-[10px] max-[1000px]:items-center"
        data-aos="fade-up"
        data-aos-duration="3000"
        aos_offset="100"
      >
        <div className="pcmimg">
          <img
            src={eleimg}
            alt=""
            className="pcm-img w-[56vh] h-[17rem] rounded-[10px] my-[30px] mx-[24px] mb-[19px] max-[1000px]:w-[40vh] max-[1000px]:h-[12rem] max-[1000px]:my-[15px]"
          />
        </div>
        <div className="cards-detail">
          <h1 className="title text-[30px] text-center font-serif max-[1000px]:text-[20px] max-[1000px]:mt-[10px]">
            Electrical Engineering
          </h1>
          <p className="detail -mt-[15px] max-[1000px]:hidden">
            <li className="text-[16px] ml-[1px]">
              Focuses on designing, developing, and maintaining electrical
              systems and devices.
            </li>
            <li className="text-[16px] ml-[1px]">
              Involves the study of electricity, electromagnetism, and
              electronics.
            </li>
            <li className="text-[16px] ml-[1px]">
              Covers a wide range of applications from power generation to
              advanced communication systems.
            </li>
            <li className="text-[16px] ml-[1px]">
              Plays a crucial role in industries like energy,
              telecommunications, and automation.
            </li>
            <li className="text-[16px] ml-[1px]">
              Drives innovation in renewable energy, smart grids, and electric
              vehicles (EVs).
            </li>
          </p>
        </div>
        <div className="card-btn flex justify-center items-center absolute top-0 -right-[500px] transition-all duration-[2000ms] cursor-pointer group-hover:right-4">
          <Link
            to={"https://www.mtu.edu/ece/undergraduate/electrical/what-is/"}
          >
            <button
              className=" btn border-2 rounded-2xl border-black w-[122px] p-3 -ml-[24rem] cursor-pointer
    mt-[10rem] bg-[#62825D]"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>

      <div
        className="card3 card flex relative  hover:shadow-[15px_9px_46px_7px_#526E48] justify-items-start gap-[73px] border-2 border-black w-[42rem] ml-[12rem] mt-[35px] rounded-2xl cursor-pointer overflow-hidden max-[1000px]:flex-col max-[1000px]:h-auto max-[1000px]:w-[20rem] 
             max-[1000px]:rounded-[10px] max-[1000px]:ml-[20rem] max-[1000px]:gap-[10px] max-[1000px]:items-center"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="pcmimg">
          <img
            src={mechanicalimg}
            alt=""
            className="pcm-img w-[56vh] h-[17rem] rounded-[10px] my-[30px] mx-[24px] mb-[19px] max-[1000px]:w-[40vh] max-[1000px]:h-[12rem] max-[1000px]:my-[15px]"
          />
        </div>
        <div className="cards-detail">
          <h1 className="title text-[27px] text-center font-serif max-[1000px]:text-[20px] max-[1000px]:mt-[10px]">
            Mechanical Engineering
          </h1>
          <p className="detail -mt-[15px] max-[1000px]:hidden">
            <li className="text-[16px] ml-[1px]">
              Focuses on the design, analysis, manufacturing, and maintenance of
              mechanical systems.
            </li>
            <li className="text-[16px] ml-[1px]">
              Involves the study of mechanics, thermodynamics, fluid dynamics,
              and materials science.
            </li>
            <li className="text-[16px] ml-[1px]">
              Applies engineering principles to develop machines, engines, and
              tools.
            </li>
            <li className="text-[16px] ml-[1px]">
              Plays a vital role in industries like automotive, aerospace,
              robotics, and manufacturing.
            </li>
            <li className="text-[16px] ml-[1px]">
              Drives innovation in advanced manufacturing, renewable energy, and
              automation technologies.
            </li>
          </p>
        </div>
        <div className="card-btn flex justify-center items-center absolute top-0 -right-[500px] transition-all duration-[2000ms] cursor-pointer group-hover:right-4">
          <Link
            to={
              "https://www.mtu.edu/mechanical-aerospace/mechanical-engineering/#:~:text=Mechanical%20engineering%20is%20one%20of,develop%2C%20build%2C%20and%20test."
            }
          >
            <button
              className=" btn border-2 rounded-2xl border-black w-[122px] p-3 -ml-[24rem] cursor-pointer
    mt-[10rem] bg-[#62825D]"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
      <div
        className="card4 card flex  relative justify-items-start gap-[73px] border-2 border-black w-[42rem] ml-[44rem] mt-[35px] rounded-2xl cursor-pointer overflow-hidden max-[1000px]:flex-col max-[1000px]:h-auto max-[1000px]:w-[20rem] 
             max-[1000px]:rounded-[10px] max-[1000px]:ml-[20rem] max-[1000px]:gap-[10px] max-[1000px]:items-center"
        data-aos="fade-up"
        data-aos-duration="6000"
      >
        <div className="pcmimg">
          <img
            src={civilimg}
            alt=""
            className="pcm-img w-[56vh] h-[17rem] rounded-[10px] my-[30px] mx-[24px] mb-[19px] max-[1000px]:w-[40vh] max-[1000px]:h-[12rem] max-[1000px]:my-[15px]"
          />
        </div>
        <div className="cards-detail">
          <h1 className="title text-[30px] text-center font-serif max-[1000px]:text-[20px] max-[1000px]:mt-[10px]">
            Civil Engineering
          </h1>
          <p className="detail -mt-[15px] max-[1000px]:hidden">
            <li className="text-[16px] ml-[1px]">
              Focuses on the design, construction, and maintenance of
              infrastructure and public works.
            </li>
            <li className="text-[16px] ml-[1px]">
              Involves the study of structures, materials, and environmental
              sustainability.
            </li>
            <li className="text-[16px] ml-[1px]">
              Covers projects like roads, bridges, buildings, dams, and water
              supply systems.
            </li>
            <li className="text-[16px] ml-[1px]">
              Plays a crucial role in urban development, disaster management,
              and environmental protection.
            </li>
            <li className="text-[16px] ml-[1px]">
              Drives innovation in smart cities, green building technologies,
              and sustainable infrastructure.
            </li>
          </p>
        </div>
        <div className="card-btn flex justify-center items-center absolute top-0 -right-[500px] transition-all duration-[2000ms] cursor-pointer group-hover:right-4">
          <Link
            to={"https://hindustanuniv.ac.in/blogs/what-is-civil-engineering/"}
          >
            <button
              className=" btn border-2 rounded-2xl border-black w-[122px] p-3 -ml-[24rem] cursor-pointer
    mt-[10rem] bg-[#62825D]"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
      <div className="another-feild ">
        <h1 className="text-[34px]  mt-[36px] font-sans text-center max-[1000px]:ml-[20rem]">
          Other Options except engineering
        </h1>
        <div className="cards flex justify-around align-middle flex-wrap gap-[5rem]">
          <div
            className="other-card relative border-8 border-[#526E48] w-[20rem] h-[22rem] rounded-2xl  mt-[38px] overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            <h1 className="text-center mt-[18px] text-[2rem]">BSC</h1>
            <p className="other-para w-[20rem] leading-8 text-[14px] p-[13px] font-[emoji]">
              B.Sc. (Bachelor of Science) is an undergraduate degree focused on
              science and technical subjects. Duration: Typically a 3-year
              course, though it can extend to 4 years in some countries. Career
              Options: Graduates can pursue careers in research, teaching, IT,
              healthcare, pharmaceuticals, and government services or continue
              with higher studies like M.Sc., MBA, MCA, or professional courses.
            </p>
            <Link
              to={
                "https://www.shiksha.com/bsc-chp#:~:text=BSc%20is%20a%203%20to,BSc%20Agriculture%2C%20BSc%20IT%20etc."
              }
            >
              <button className="other-btn flex justify-center items-center  bottom-0 top-[35vh] transition-all duration-[2000ms]  group-hover:top-[31px] group-hover:bottom-[132px] text-center  border-2 p-[7px] mt-[9rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D] absolute">
                Read More
              </button>
            </Link>
          </div>
          <div
            className="other-card border-8 border-[#526E48] w-[20rem] h-[22rem] rounded-2xl mt-[38px] overflow-hidden relative"
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            <h1 className="text-center mt-[18px] text-[2rem]">BCA</h1>
            <p className="other-para w-[20rem] leading-8 text-[14px] p-[13px] font-[emoji]">
              BCA (Bachelor of Computer Applications) is an undergraduate degree
              focused on computer applications and IT. Duration: Typically a
              3-year course divided into 6 semesters. Career Options: Graduates
              can work in IT and software industries as Software Developers, Web
              Developers, System Analysts, Database Administrators, Network
              Engineers, and IT Support.
            </p>
            <Link
              to={
                "https://www.shiksha.com/bca-bachelor-of-computer-applications-chp"
              }
            >
              <button className=" other-btn flex justify-center items-center absolute bottom-0 top-[35vh] transition-all duration-[2000ms]  group-hover:top-[31px] group-hover:bottom-[132px] text-center  border-2 p-[7px] mt-[14rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D]">
                Read More
              </button>
            </Link>
          </div>
          <div
            className="other-card border-8 border-[#526E48] w-[20rem] h-[22rem] rounded-2xl mt-[38px] overflow-hidden relative"
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            <h1 className="text-center mt-[18px] text-[2rem]">B.E/E.D</h1>
            <p className="other-para w-[20rem] leading-8 text-[14px] p-[13px] font-[emoji]">
              B.E. (Bachelor of Engineering) or B.Tech (Bachelor of Technology)
              are undergraduate degrees focused on engineering and technology.
              Duration: Typically a 4-year course divided into 8 semesters.
              Career Options: Graduates can work in IT, manufacturing, R&D,
              government, consultancy, and core engineering sectors.
            </p>
            <Link to={"https://www.shiksha.com/b-ed-chp"}>
              <button className=" other-btn  flex justify-center items-center absolute bottom-0 top-[35vh] transition-all duration-[2000ms]  group-hover:top-[31px] group-hover:bottom-[132px] text-center border-2 p-[7px] mt-[14rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D]">
                Read More
              </button>
            </Link>
          </div>
          <div
            className="other-card border-8 border-[#526E48] w-[20rem] h-[22rem] rounded-2xl mt-[38px] overflow-hidden relative"
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            <h1 className="text-center mt-[18px] text-[2rem]">LLB</h1>
            <p className="other-para w-[20rem] leading-8 text-[14px] p-[13px] font-[emoji]">
              LLB (Bachelor of Laws) is an undergraduate degree in law that
              provides foundational legal education and prepares students to
              become legal professionals. Duration: 3-Year LLB: For graduates
              from any stream. 5-Year Integrated LLB (BA LLB, BBA LLB, B.Com
              LLB, B.Sc LLB): For students after 10+2 (high school). Career
              Options: After LLB, one can practice as an advocate after
              enrolling with the Bar Council.
            </p>
            <Link to={"https://www.shiksha.com/ll-b-chp"}>
              <button className=" other-btn flex justify-center items-center absolute bottom-0 top-[35vh] transition-all duration-[2000ms]  group-hover:top-[31px] group-hover:bottom-[132px] text-center border-2 p-[7px] mt-[14rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D]">
                Read More
              </button>
            </Link>
          </div>
          <div
            className="other-card border-8 border-[#526E48] w-[20rem] h-[22rem] rounded-2xl mt-[38px] overflow-hidden relative"
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            <h1 className="text-center mt-[18px] text-[2rem]">BBA</h1>
            <p className="other-para w-[20rem] leading-8 text-[14px] p-[13px] font-[emoji]">
              BBA (Bachelor of Business Administration) is an undergraduate
              degree focused on business management and administration.
              Duration: Typically a 3-year course divided into 6 semesters.
              Career Options: Offers diverse career paths in management,
              finance, marketing, HR, and consulting. Job roles include Business
              Development Executive, Marketing Manager, HR Executive, Financial
              Analyst and Entrepreneur.
            </p>
            <Link
              to={
                "https://www.shiksha.com/bba-bachelor-of-business-administration-chp"
              }
            >
              <button className=" other-btn flex justify-center items-center absolute bottom-0 top-[35vh] transition-all duration-[2000ms]  group-hover:top-[31px] group-hover:bottom-[132px] text-centerborder-2 p-[7px] mt-[14rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D]">
                Read More
              </button>
            </Link>
          </div>
          <div
            className="other-card border-8 border-[#526E48] w-[20rem] h-[22rem] rounded-2xl mt-[38px] overflow-hidden relative"
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            <h1 className="text-center mt-[18px] text-[2rem]">CPL</h1>
            <p className="other-para w-[20rem] leading-8 text-[14px] p-[13px] font-[emoji]">
              CPL (Commercial Pilot License) is a professional certification
              that allows individuals to work as commercial pilots and operate
              aircraft for airlines or other commercial purposes. Duration:
              Typically 1 to 2 years, depending on the country, training
              institute, and weather conditions.Career Options: After obtaining
              a CPL, one can work as a Commercial Pilot for airlines, charter
              companies, cargo flights, and private jets.
            </p>
            <Link
              to={
                "https://www.amecet.in/commercial-pilot-license-admission-process.php"
              }
            >
              <button className=" other-btn flex justify-center items-center absolute bottom-0 top-[35vh] transition-all duration-[2000ms]  group-hover:top-[31px] group-hover:bottom-[132px] text-center border-2 p-[7px] mt-[14rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D]">
                Read More
              </button>
            </Link>
          </div>
          <div
            className="other-card border-8 border-[#526E48] w-[20rem] h-[22rem] rounded-2xl mt-[38px] overflow-hidden relative"
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            <h1 className="text-center mt-[18px] text-[2rem]">BHM</h1>
            <p className="other-para w-[20rem] leading-8 text-[14px] p-[13px] font-[emoji]">
              BHM stands for Bachelor of Hotel Management, a popular
              undergraduate course focused on hospitality and hotel management.
              It equips students with skills in hotel operations, food and
              beverage management, housekeeping, front office, catering, and
              event planning. <span>Career Opportunities After BHM:</span> Hotel
              Manager Restaurant Manager Front Office Manager Event Planner Food
              and Beverage Manager Hospitality Consultant Travel.
            </p>
            <Link
              to={
                "https://www.shiksha.com/bhm-bachelor-of-hotel-management-chp"
              }
            >
              <button className=" other-btn flex justify-center items-center absolute bottom-0 top-[35vh] transition-all duration-[2000ms]  group-hover:top-[31px] group-hover:bottom-[132px] text-center  border-2 p-[7px] mt-[14rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D]">
                Read More
              </button>
            </Link>
          </div>
          <div
            className="other-card border-8 border-[#526E48] w-[20rem] h-[22rem] rounded-2xl mt-[38px] overflow-hidden relative"
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            <h1 className="text-center mt-[18px] text-[2rem]">B.ARCH</h1>
            <p className="other-para w-[20rem] leading-8 text-[14px] p-[13px] font-[emoji]">
              B.Arch (Bachelor of Architecture) is a five-year undergraduate
              degree program that focuses on the art and science of designing
              and planning buildings, structures, and urban landscapes. It
              combines creativity, technical skills, and practical knowledge to
              prepare students for a career in architecture.
              <span>Career Opportunities After B.Arch:</span>Architect ,Urban
              Planner ,Interior Designer, Landscape Architect, Restoration
              Architect.
            </p>
            <Link
              to={"https://www.shiksha.com/b-arch-bachelor-of-architecture-chp"}
            >
              <button className=" other-btn flex justify-center items-center absolute bottom-0 top-[35vh] transition-all duration-[2000ms] group-hover:top-[31px] group-hover:bottom-[132px] text-center border-2 p-[7px] mt-[14rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D]">
                Read More
              </button>
            </Link>
          </div>
          <div
            className="other-card border-8 border-[#526E48] w-[20rem] h-[22rem] rounded-2xl mt-[38px] overflow-hidden relative"
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            <h1 className="text-center mt-[18px] text-[2rem]">NDA</h1>
            <p className="other-para w-[20rem] leading-8 text-[14px] p-[13px] font-[emoji]">
              NDA (National Defence Academy) is a premier joint training
              institute of the Indian Armed Forces, where cadets of the Indian
              Army, Navy, and Air Force are trained together before moving to
              their respective service academies for further pre-commission
              training. It’s one of the most prestigious institutions for
              military training in India.
            </p>
            <Link
              to={
                "https://en.wikipedia.org/wiki/National_Defence_Academy_(India)"
              }
            >
              <button className=" other-btn flex justify-center items-center absolute bottom-0 top-[35vh] transition-all duration-[2000ms] group-hover:top-[31px] group-hover:bottom-[132px] text-center  border-2 p-[7px] mt-[14rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D]">
                Read More
              </button>
            </Link>
          </div>
          <div
            className="other-card border-8 border-[#526E48] w-[20rem] h-[22rem] rounded-2xl mt-[38px] overflow-hidden relative"
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            <h1 className="text-center mt-[18px] text-[2rem]">AIR FORCE</h1>
            <p className="other-para w-[20rem] leading-8 text-[14px] p-[13px] font-[emoji]">
              The Indian Air Force (IAF) is the air arm of the Indian Armed
              Forces, responsible for securing Indian airspace and conducting
              aerial warfare during armed conflicts. It’s known for its
              state-of-the-art aircraft, advanced technology, and highly skilled
              personnel.
            </p>
            <Link to={""}>
              <button className=" other-btn flex justify-center items-center absolute bottom-0 top-[35vh] transition-all duration-[2000ms]  group-hover:top-[31px] group-hover:bottom-[132px] text-center border-2 p-[7px] mt-[14rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D]">
                Read More
              </button>
            </Link>
          </div>
          <div
            className="other-card border-8 border-[#526E48] w-[20rem] h-[22rem] rounded-2xl mt-[38px] overflow-hidden relative"
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            <h1 className="text-center mt-[18px] text-[2rem]">
              FASHION TECHNOLOGY
            </h1>
            <p className="other-para w-[20rem] leading-8 text-[14px] p-[13px] font-[emoji]">
              Fashion Technology is a specialized field that combines fashion
              design, technology, and business to create innovative clothing,
              accessories, and textiles. It focuses on the application of
              technology in designing, producing, and marketing fashion
              products. This field merges creativity with practical skills,
              making it ideal for those passionate about fashion and tech.
            </p>
            <Link to={"https://en.wikipedia.org/wiki/Indian_Air_Force"}>
              <button className=" other-btn  flex justify-center items-center absolute bottom-0 top-[35vh] transition-all duration-[2000ms]  group-hover:top-[31px] group-hover:bottom-[132px] text-center border-2 p-[7px] mt-[11rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D]">
                Read More
              </button>
            </Link>
          </div>
          <div
            className="other-card border-8 border-[#526E48] w-[20rem] h-[22rem] rounded-2xl mt-[38px] overflow-hidden relative"
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            <h1 className="text-center mt-[18px] text-[2rem]">B.PHARMA</h1>
            <p className="other-para w-[20rem] leading-8 text-[14px] p-[13px] font-[emoji]">
              B.Pharm (Bachelor of Pharmacy) is a four-year undergraduate degree
              focused on the study of pharmaceutical sciences. B.Pharm combines
              healthcare, chemistry, and biology to ensure safe and effective
              use of pharmaceutical drugs. The course emphasizes the preparation
              of medications, understanding drug interactions, and advising
              patients on medication use.
            </p>
            <Link to={"https://www.shiksha.com/b-pharmacy-chp"}>
              <button className=" other-btn  flex justify-center items-center absolute bottom-0 top-[35vh] transition-all duration-[2000ms]  group-hover:top-[31px] group-hover:bottom-[132px] text-center border-2 p-[7px] mt-[14rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D]">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}


export default Pcm
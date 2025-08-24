import React from 'react';
import "./Pcb.css";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import medical from "./images/medical.jpg";
import aggriculture from "./images/aggriculture.jpg";
import bioreasearch from "./images/bioreasearch.jpg";
import computerimg from "./images/computer.avif";
import emerging from "./images/emerging.avif";
const Pcb = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  useEffect (()=>{
Aos.init({ duration: 1000, once: false });
  },[])
  
  return (
    <>
      <div className="main-pcb flex justify-evenly align-middle text-center bg-[#9EDF9C] w-[100rem]">
        <div
          className="back -ml-[22rem] mt-[2rem] max-[1000px]:ml-[6rem] max-[1000px]:mt-[1rem]"
          onClick={handleGoBack}
        >
          <MdArrowBack className="max-[1000px]:size-[2rem]" />
        </div>
        <div
          className="pcb-head mt-5 mx-[30px] mb-[30px]"
          data-aos="fade-down-right"
        >
          <h1 className="text-black text-[35px]  max-[1000px]:mr-[40rem] max-[1000px]:text-[20px] max-[1000px]:font-bold">
            WELCOME TO PCB PAGE
          </h1>
          <span className="font-[Times_New_Roman] max-[1000px]:hidden ">
            Diverse Exciting Opportunities in Mediacal Sciences, Biological
            Sciences and beyond...
          </span>
        </div>
      </div>
      <div className="choice-pcb max-[1000px]:ml-[20rem]">
        <h1 className="question mt-[21px] mr-[13rem] mb-[30px] text-[26px] uppercase font-[fangsong] max-[1000px]:text-[2rem]">
          why to choose PCB?
        </h1>
        <li className="ans  max-[1000px]:text-[2rem] mr-[13rem] my-[0px] mb-[7px] text-[19px]">
          Wide Career Opportunities: – Opens doors to medical, allied health
          sciences, biological, agriculture, environmental sciences and
          interdisiplinary fields.
        </li>
        <li className="ans max-[1000px]:text-[2rem] mr-[13rem] my-[0px] mb-[7px] text-[19px]">
          Strong Analytical Skills: – Enhances problem-solving, logical
          thinking, and analytical reasoning abilities.
        </li>
        <li className="ans max-[1000px]:text-[2rem] mr-[13rem] my-[0px] mb-[7px] text-[19px]">
          Gateway to Prestigious Careers: – Essential for careers in Medicine,
          research, biotechnology and environmental sciences.
        </li>
      </div>

      <div
        className="card1  hover:shadow-[15px_9px_46px_7px_#526E48] card relative  flex justify-items-start gap-[73px] border-2 border-black w-[42rem] ml-[12rem] mt-[35px] rounded-2xl
         cursor-pointer overflow-hidden max-[1000px]:flex-col max-[1000px]:h-auto max-[1000px]:w-[20rem] 
             max-[1000px]:rounded-[10px] max-[1000px]:ml-[13rem] max-[1000px]:gap-[10px] max-[1000px]:items-center"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="pcmimg">
          <img
            src={medical}
            alt=""
            className="pcm-img w-[56vh] h-[17rem] rounded-[10px] my-[30px] mx-[24px] mb-[19px] max-[1000px]:w-[40vh] max-[1000px]:h-[12rem] max-[1000px]:my-[15px]"
          />
        </div>
        <div className="cards-detail">
          <h1 className="title text-[30px] text-center font-serif">
            Medical and Allied Health Science
          </h1>
          <p className="detail -mt-[15px] max-[1000px]:hidden">
            <li className="text-[16px] ml-[1px]">
              Focuses on diagnosing, treating, and preventing illnesses to
              improve patient health and well-being
            </li>
            <li className="text-[16px] ml-[1px]">
              Includes core fields like MBBS, BDS, and BAMS, as well as allied
              fields like Physiotherapy, Nursing, Radiology, and Lab Technology.
            </li>
            <li className="text-[16px] ml-[1px]">
              Plays a critical role in public health, emergency care,
              rehabilitation, and diagnostics.
            </li>
            <li className="text-[16px] ml-[1px]">
              Emphasizes clinical skills, biomedical knowledge, and hands-on
              patient care.
            </li>
          </p>
        </div>
        <div className="card-btn flex justify-center items-center absolute top-0 right-[-500px] transition-all duration-[2000ms] cursor-pointer">
          <Link
            to={
              "https://www.telegraphindia.com/edugraph/colleges/ranking/stream-allied-health-sciences/134"
            }
          >
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
        className="card2  card hover:shadow-[15px_9px_46px_7px_#526E48] flex  relative justify-items-start gap-[73px] border-2 border-black w-[42rem] ml-[44rem] mt-[35px] rounded-2xl cursor-pointer  
        max-[1000px]:flex-col max-[1000px]:h-auto max-[1000px]:w-[20rem] 
             max-[1000px]:rounded-[10px] max-[1000px]:ml-[13rem] max-[1000px]:gap-[10px] max-[1000px]:items-center overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="3000"
        aos_offset="100"
      >
        <div className="pcmimg">
          <img
            src={bioreasearch}
            alt=""
            className="pcm-img w-[56vh] h-[17rem] rounded-[10px] my-[30px] mx-[24px] mb-[19px] max-[1000px]:w-[40vh] max-[1000px]:h-[12rem] max-[1000px]:my-[15px]"
          />
        </div>
        <div className="cards-detail">
          <h1 className="title text-[30px] text-center font-serif">
            Biological Science and Research
          </h1>
          <p className="detail -mt-[15px] max-[1000px]:hidden">
            <li className="text-[16px] ml-[1px]">
              Focuses on understanding living organisms, from cells and genes to
              ecosystems and evolution.
            </li>
            <li className="text-[16px] ml-[1px]">
              Combines principles of biology, chemistry, and scientific
              investigation.
            </li>
            <li className="text-[16px] ml-[1px]">
              Plays a vital role in fields like genetics, biotechnology,
              microbiology, and ecology.
            </li>
            <li className="text-[16px] ml-[1px]">
              Involves conducting experiments, analyzing data, and drawing
              conclusions to expand scientific knowledge.
            </li>
            <li className="text-[16px] ml-[1px]">
              Drives innovation in healthcare, agriculture, environmental
              conservation, and drug discovery.
            </li>
          </p>
        </div>
        <div className="card-btn flex justify-center items-center absolute top-0 right-[-500px] transition-all duration-[2000ms] cursor-pointer">
          <Link to={"https://www.csir.res.in/Biological-sciences"}>
            <button
              className=" btn border-2 rounded-2xl border-black w-[122px] p-3 -ml-[24rem] cursor-pointer
    mt-[10rem] bg-[#62825D] max-[1000px]:ml-[-10rem]"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>

      <div
        className="card3 card  hover:shadow-[15px_9px_46px_7px_#526E48] flex relative justify-items-start gap-[73px] border-2 border-black w-[42rem] ml-[12rem] mt-[35px] rounded-2xl cursor-pointer  
        max-[1000px]:flex-col max-[1000px]:h-auto max-[1000px]:w-[20rem] 
             max-[1000px]:rounded-[10px] max-[1000px]:ml-[13rem] max-[1000px]:gap-[10px] max-[1000px]:items-center overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="pcmimg">
          <img
            src={aggriculture}
            alt=""
            className="pcm-img w-[56vh] h-[17rem] rounded-[10px] my-[30px] mx-[24px] mb-[19px] max-[1000px]:w-[40vh] max-[1000px]:h-[12rem] max-[1000px]:my-[15px]"
          />
        </div>
        <div className="cards-detail">
          <h1 className="title text-[27px] text-center font-serif">
            Agriculture and Environmental Science
          </h1>
          <p className="detail -mt-[15px] max-[1000px]:hidden">
            <li className="text-[16px] ml-[1px]">
              Focuses on sustainable farming and environmental conservation.
            </li>
            <li className="text-[16px] ml-[1px]">
              Combines biology, ecology, and technology to improve food
              production and protect natural resources.
            </li>
            <li className="text-[16px] ml-[1px]">
              Plays a key role in addressing climate change, biodiversity, and
              global food security.
            </li>
            <li className="text-[16px] ml-[1px]">
              Plays a vital role in industries like automotive, aerospace,
              robotics, and manufacturing.
            </li>
            <li className="text-[16px] ml-[1px]">
              Drives innovation in eco-friendly agriculture and green
              technologies.
            </li>
          </p>
        </div>
        <div className="card-btn flex justify-center items-center absolute top-0 right-[-500px] transition-all duration-[2000ms] cursor-pointer">
          <Link to={"https://www.tandfonline.com/environment-agriculture"}>
            <button
              className=" btn border-2 rounded-2xl border-black w-[122px] p-3 -ml-[24rem] cursor-pointer
    mt-[10rem] bg-[#62825D] max-[1000px]:ml-[-10rem]"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
      <div
        className="card4 card hover:shadow-[15px_9px_46px_7px_#526E48] flex  relative justify-items-start gap-[73px] border-2 border-black w-[42rem] ml-[44rem] mt-[35px] rounded-2xl cursor-pointer  
        max-[1000px]:flex-col max-[1000px]:h-auto max-[1000px]:w-[20rem] 
             max-[1000px]:rounded-[10px] max-[1000px]:ml-[13rem] max-[1000px]:gap-[10px] max-[1000px]:items-center overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="6000"
      >
        <div className="pcmimg">
          <img
            src={emerging}
            alt=""
            className="pcm-img w-[56vh] h-[17rem] rounded-[10px] my-[30px] mx-[24px] mb-[19px] max-[1000px]:w-[40vh] max-[1000px]:h-[12rem] max-[1000px]:my-[15px]"
          />
        </div>
        <div className="cards-detail">
          <h1 className="title text-[30px] text-center font-serif">
            Interdisciplinary and Emerging Field
          </h1>
          <p className="detail -mt-[15px] max-[1000px]:hidden">
            <li className="text-[16px] ml-[1px]">
              Focuses on blending biology with other domains like technology,
              psychology, and forensic science.
            </li>
            <li className="text-[16px] ml-[1px]">
              Covers dynamic areas such as biotechnology, genomics, nutrition,
              psychology, and forensic science.
            </li>
            <li className="text-[16px] ml-[1px]">
              Encourages innovation across healthcare, food, crime
              investigation, and mental health.
            </li>
            <li className="text-[16px] ml-[1px]">
              Drives new-age careers through research, diagnostics, data
              science, and personalized medicine.
            </li>
          </p>
        </div>
        <div className="card-btn flex justify-center items-center absolute top-0 right-[-500px] transition-all duration-[2000ms] cursor-pointer">
          <Link to={"https://www.ncbi.nlm.nih.gov/books/NBK22616/"}>
            <button
              className=" btn border-2 rounded-2xl border-black w-[122px] p-3 -ml-[24rem] cursor-pointer
    mt-[10rem] bg-[#62825D] max-[1000px]:ml-[-10rem]"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>

      <div className="another-feild">
        <h1 className="text-[34px]  mt-[36px] font-sans text-center">
          Other Options
        </h1>
        <div className="cards flex justify-around align-middle flex-wrap gap-[5rem]">
          <div
            className="other-card relative  border-8 border-[#526E48] w-[20rem] h-[22rem] rounded-2xl  mt-[38px] overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            <h1 className="text-center mt-[18px] text-[2rem]">BSC</h1>
            <p className="other-para w-[20rem] leading-[2] text-[14px] p-[13px] font-[emoji]">
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
              <button className="other-btn flex justify-center items-center  bottom-0 top-[35vh] transition-all duration-[2000ms] border-2 p-[7px] mt-[9rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D] absolute">
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
            <p className="other-para w-[20rem] leading-[2] text-[14px] p-[13px] font-[emoji]">
              B.E. (Bachelor of Engineering) or B.Tech (Bachelor of Technology)
              are undergraduate degrees focused on engineering and technology.
              Duration: Typically a 4-year course divided into 8 semesters.
              Career Options: Graduates can work in IT, manufacturing, R&D,
              government, consultancy, and core engineering sectors.
            </p>
            <Link to={"https://www.shiksha.com/b-ed-chp"}>
              <button className=" other-btn flex justify-center items-center absolute bottom-0 top-[35vh] transition-all duration-[2000ms] border-2 p-[7px] mt-[14rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D]">
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
            <p className="other-para w-[20rem] leading-[2] text-[14px] p-[13px] font-[emoji]">
              LLB (Bachelor of Laws) is an undergraduate degree in law that
              provides foundational legal education and prepares students to
              become legal professionals. Duration: 3-Year LLB: For graduates
              from any stream. 5-Year Integrated LLB (BA LLB, BBA LLB, B.Com
              LLB, B.Sc LLB): For students after 10+2 (high school). Career
              Options: After LLB, one can practice as an advocate after
              enrolling with the Bar Council.
            </p>
            <Link to={"https://www.shiksha.com/ll-b-chp"}>
              <button className=" other-btn flex justify-center items-center absolute bottom-0 top-[35vh] transition-all duration-[2000ms] border-2 p-[7px] mt-[14rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D]">
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
            <p className="other-para w-[20rem] leading-[2] text-[14px] p-[13px] font-[emoji]">
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
              <button className=" other-btn flex justify-center items-center absolute bottom-0 top-[35vh] transition-all duration-[2000ms]  border-2 p-[7px] mt-[14rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D]">
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
            <p className="other-para w-[20rem] leading-[2] text-[14px] p-[13px] font-[emoji]">
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
              <button className=" other-btn flex justify-center items-center absolute bottom-0 top-[35vh] transition-all duration-[2000ms] border-2 p-[7px] mt-[14rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D]">
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
            <p className="other-para w-[20rem] leading-[2] text-[14px] p-[13px] font-[emoji]">
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
              <button className=" other-btn flex justify-center items-center absolute bottom-0 top-[35vh] transition-all duration-[2000ms]  border-2 p-[7px] mt-[14rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D]">
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
            <p className="other-para w-[20rem] leading-[2] text-[14px] p-[13px] font-[emoji]">
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
              <button className=" other-btn flex justify-center items-center absolute bottom-0 top-[35vh] transition-all duration-[2000ms] border-2 p-[7px] mt-[14rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D]">
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
            <p className="other-para w-[20rem] leading-[2] text-[14px] p-[13px] font-[emoji]">
              The Indian Air Force (IAF) is the air arm of the Indian Armed
              Forces, responsible for securing Indian airspace and conducting
              aerial warfare during armed conflicts. It’s known for its
              state-of-the-art aircraft, advanced technology, and highly skilled
              personnel.
            </p>
            <Link to={""}>
              <button className=" other-btn flex justify-center items-center absolute bottom-0 top-[35vh] transition-all duration-[2000ms] border-2 p-[7px] mt-[14rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D]">
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
            <p className="other-para w-[20rem] leading-[2] text-[14px] p-[13px] font-[emoji]">
              Fashion Technology is a specialized field that combines fashion
              design, technology, and business to create innovative clothing,
              accessories, and textiles. It focuses on the application of
              technology in designing, producing, and marketing fashion
              products. This field merges creativity with practical skills,
              making it ideal for those passionate about fashion and tech.
            </p>
            <Link to={"https://en.wikipedia.org/wiki/Indian_Air_Force"}>
              <button className=" other-btn flex justify-center items-center absolute bottom-0 top-[35vh] transition-all duration-[2000ms]  border-2 p-[7px] mt-[11rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D]">
                Read More
              </button>
            </Link>
          </div>
          <div
            className="other-card border-8 border-[#526E48] w-[20rem] h-[22rem] rounded-2xl mt-[38px] overflow-hidden relative"
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            <h1 className="text-center mt-[18px] text-[2rem]">B.A.</h1>
            <p className="other-para w-[20rem] leading-[2] text-[14px] p-[13px] font-[emoji]">
              B.A. (Bachelor of Arts) is a three-year undergraduate degree
              focused on humanities and social sciences. It includes subjects
              like literature, history, sociology, and psychology. The course
              helps students develop critical thinking, communication, and
              analytical skills for careers in education, media, public service,
              and more.
            </p>
            <Link to={"https://www.shiksha.com/b-a-bachelor-of-arts-chp"}>
              <button className=" other-btn flex justify-center items-center absolute bottom-0 top-[35vh] transition-all duration-[2000ms] border-2 p-[7px] mt-[14rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D]">
                Read More
              </button>
            </Link>
          </div>
          <div
            className="other-card border-8 border-[#526E48] w-[20rem] h-[22rem] rounded-2xl mt-[38px] overflow-hidden relative"
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            <h1 className="text-center mt-[18px] text-[2rem]">B.DES.</h1>
            <p className="other-para w-[20rem] leading-[2] text-[14px] p-[13px] font-[emoji]">
              B.Des. (Bachelor of Design) is a four-year undergraduate degree
              focused on creative fields like fashion, graphic, interior,
              product, and communication design. The course develops artistic
              skills, innovation, and design thinking. It blends aesthetics with
              technology to solve real-world problems and prepares students for
              dynamic careers in the design industry.
            </p>
            <Link to={"https://www.shiksha.com/b-des-bachelor-of-design-chp"}>
              <button className=" other-btn flex justify-center items-center absolute bottom-0 top-[35vh] transition-all duration-[2000ms]  border-2 p-[7px] mt-[14rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D]">
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
            <p className="other-para w-[20rem] leading-[2] text-[14px] p-[13px] font-[emoji]">
              B.Pharm (Bachelor of Pharmacy) is a four-year undergraduate degree
              focused on the study of pharmaceutical sciences. B.Pharm combines
              healthcare, chemistry, and biology to ensure safe and effective
              use of pharmaceutical drugs. The course emphasizes the preparation
              of medications, understanding drug interactions, and advising
              patients on medication use.
            </p>
            <Link to={"https://www.shiksha.com/b-pharmacy-chp"}>
              <button className=" other-btn  flex justify-center items-center absolute bottom-0 top-[35vh] transition-all duration-[2000ms] border-2 p-[7px] mt-[14rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D]">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}


export default Pcb
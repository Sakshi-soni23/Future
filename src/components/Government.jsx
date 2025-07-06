import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import civil from "./images/civil.jpg";
import defense from "./images/defense.jpg";
import law from "./images/law.jpg";
import miss from "./images/miss.jpg";
import post from "./images/postoffice.jpg";
import railway from "./images/railway.jpg";
import teaching from "./images/teaching.jpg";
import bank from "./images/bank.avif";

const Government = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
  }, []);
  return (
    <>
      <div className="com-container">
        <div className="comerece-heading flex justify-around text-center bg-[#DBFFCB] h-[83px] w-[100rem] ">
          <div
            className="back ml-[-10rem] mt-[2em] cursor-pointer max-[1000px]:ml-[-2rem ]"
            onClick={handleGoBack}
          >
            <MdArrowBack className="max-[1000px]:size-[2rem]" />
          </div>
          <div
            className="heading text-[35px] font-serif mt-[14px] mr-[9em] max-[1000px]:text-[2em] max-[1000px]:mr-[20rem] max-[1000px]:mt-[20px] max-[1000px]:font-bold"
            data-aos="fade-down-right"
          >
            WELCOME TO GOVERNMENT PAGE
          </div>
        </div>
        <div className="Q mt-[53px] ml-[12em] ">
          <h2 className="text-[26px] leading-[61px] max-[1000px]:text-[16px]">
            Why Preparing For Government Exam After 10th?
          </h2>
          <p className="text-[16px] w-[68rem] font-serif max-[1000px]:text-[16px] max-[1000px]:w-[50rem]">
            Government jobs are one of the most secure and respected career
            paths in India. Here are the top options you can consider based on
            your qualification:
          </p>
        </div>
        <div className="example max-[1000px]:hidden">
          <div className="fewoptions ml-[12rem] mt-[2rem]">
            <h1 className="text-[21px] max-[1000px]:text-[16px]">
              1. Indian Army (Soldier GD, Tradesman)
            </h1>
            <ul className="leading-[38px] ml-[27px] max-[1000px]:text-[16px]">
              <li>Eligibility: 10th pass</li>
              <li>Age Limit: 17.5 to 21 years</li>
              <li>Selection: Physical Test + Written Exam</li>
              <li>Perks: Job security, uniform service, pension</li>
            </ul>
          </div>
          <div className="fewoptions ml-[12rem] mt-[2rem]">
            <h1 className="text-[21px] max-[1000px]:text-[16px]">
              2. Railway Group D
            </h1>
            <ul className="lleading-[38px] ml-[27px] max-[1000px]:text-[16px]">
              <li>Eligibility: 10th pass</li>
              <li>Age Limit: 18 to 33 years</li>
              <li>Selection: CBT + Physical + Medical</li>
              <li>Departments: Track maintainer, porter, helper, etc.</li>
            </ul>
          </div>
          <div className="fewoptions ml-[12rem] mt-[2rem]">
            <h1 className="text-[21px] max-[1000px]:text-[16px]">
              3. SSC CHSL (LDC, Data Entry Operator)
            </h1>
            <ul className="leading-[38px] ml-[27px] max-[1000px]:text-[16px]">
              <li>Eligibility: 12th pass</li>
              <li>Age Limit: 18 to 27 years</li>
              <li>Exam Stages: Tier 1, Tier 2, Typing Test</li>
              <li>Salary: ₹25,000 – ₹40,000</li>
            </ul>
          </div>
          <div className="fewoptions ml-[12rem] mt-[2rem]">
            <h1 className="text-[21px] max-[1000px]:text-[16px]">
              4. NDA (National Defence Academy)
            </h1>
            <ul className="leading-[38px] ml-[27px] max-[1000px]:text-[16px]">
              <li>Eligibility: 12th pass (PCM for Air Force & Navy)</li>
              <li>Age Limit: 16.5 to 19.5 years</li>
              <li>Selection: UPSC Exam + SSB Interview + Medical</li>
              <li>Services: Indian Army, Navy, Air Force</li>
            </ul>
          </div>
        </div>

        {/* cards */}
        <div
          className="card1  card relative  h-[24rem] flex justify-items-start gap-[63px] border-2 border-black
           w-[42rem] ml-[9rem] mt-[70px] rounded-2xl cursor-pointer overflow-hidden max-[1000px]:h-[10rem] max-[1000px]:w-[20rem]
            max-[1000px]:rounded-[10px] max-[1000px]:ml-[20rem] max-[1000px]:gap-[50px]"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="Civil Services">
            <img
              src={civil}
              alt=""
              className="w-[23rem] h-[20rem] ml-[2rem] mt-[2em] rounded-2xl max-[1000px]:w-[16rem] max-[1000px]:h-[7rem] max-[1000px]:mt-[1em]"
            />
          </div>
          <div className="cards-detail max-[1000px]:hidden">
            <h1 className="title text-[25px] mt-[15px] text-center font-serif">
              Civil Services
            </h1>
            <p className="detail mt-[3px] leading-[38px]">
              <li className="text-[16px] ml-[1px]">
                📌 Top Posts: IAS, IPS, IFS, IRS
              </li>
              <li className="text-[16px] ml-[1px]">
                🧑‍🎓 Eligibility: Graduation in any stream
              </li>
              <li className="text-[16px] ml-[1px]">
                📊 Exam Stages: Prelims ➤ Mains ➤ Interview
              </li>
              <li className="text-[16px] ml-[1px]">
                🕒 Age Limit: 21–32 years (General)
              </li>
              <li className="text-[16px] ml-[1px]">
                📖 Conducted By: UPSC (annually)
              </li>
            </p>
          </div>
          <div className="card-btn">
            <Link to={"https://en.wikipedia.org/wiki/Civil_Services_of_India"}>
              <button
                className="btn border-2 rounded-2xl border-black w-[122px] p-3 -ml-[24rem] cursor-pointer
                     mt-[10rem] bg-[#7fb078] max-[1000px]:w-[80px] max-[1000px]:mt-[5rem] max-[1000px]:ml-[-10rem] max-[1000px]:text-[10px]"
              >
                Read More
              </button>
            </Link>
          </div>
        </div>

        <div
          className="card2  card relative  flex justify-items-start gap-[73px] border-2 border-black w-[42rem] ml-[48rem] mt-[70px] rounded-2xl cursor-pointer 
          overflow-hidden  max-[1000px]:h-[10rem] max-[1000px]:w-[20rem] max-[1000px]:rounded-[10px] max-[1000px]:ml-[20rem] max-[1000px]:gap-[50px]"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="Banking w-[30em]">
            <img
              src={bank}
              alt=""
              className="w-[23rem] h-[20rem] ml-[2rem] mt-[55px] rounded-2xl max-[1000px]:w-[16rem] max-[1000px]:h-[7rem] max-[1000px]:mt-[1em] "
            />
          </div>
          <div className="cards-detail  max-[1000px]:hidden">
            <h1 className="title text-[19px] mt-[15px] text-center font-serif">
              Banking Exams (SBI / IBPS / RBI)
            </h1>
            <p className="detail mt-[3px] leading-[31px]">
              <li className="text-[16px] ml-[1px]">
                🏦 Top Roles: PO (Probationary Officer), Clerk, Specialist
                Officer
              </li>
              <li className="text-[16px] ml-[1px]">
                📚 Popular Exams: SBI PO, IBPS PO/Clerk, RBI Grade B
              </li>
              <li className="text-[16px] ml-[1px]">
                🎓 Eligibility: Graduation in any stream
              </li>
              <li className="text-[16px] ml-[1px]">
                🧠 Selection: Prelims ➤ Mains ➤ Interview
              </li>
              <li className="text-[16px] ml-[1px]">
                🕒 Age Limit: 20–30 years (varies by post)
              </li>
            </p>
          </div>
          <div className="card-btn">
            <Link
              to={
                "https://www.shiksha.com/sarkari-exams/banking/articles/10-best-bank-exams-blogId-40681"
              }
            >
              <button
                className="btn border-2 rounded-2xl border-black w-[122px] p-3 -ml-[24rem] cursor-pointer
                     mt-[10rem] bg-[#7fb078] max-[1000px]:w-[80px] max-[1000px]:mt-[5rem] max-[1000px]:ml-[-10rem] max-[1000px]:text-[10px]"
              >
                Read More
              </button>
            </Link>
          </div>
        </div>

        <div
          className="card3  card relative  flex justify-items-start gap-[73px] border-2 border-black w-[42rem] ml-[9rem] mt-[70px]
            rounded-2xl cursor-pointer overflow-hidden  max-[1000px]:h-[10rem] max-[1000px]:w-[20rem] max-[1000px]:rounded-[10px] max-[1000px]:ml-[20rem] max-[1000px]:gap-[50px]"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="defense">
            <img
              src={defense}
              alt=""
              className="w-[23rem] h-[17rem] ml-[2rem] mt-[35px] rounded-2xl max-[1000px]:w-[16rem] max-[1000px]:h-[7rem] max-[1000px]:mt-[1em]"
            />
          </div>
          <div className="cards-detail  max-[1000px]:hidden">
            <h1 className="title text-[19px] mt-[15px] text-center font-serif">
              Defence Exams (Army / Navy / Air Force)
            </h1>
            <p className="detail mt-[3px] leading-[31px]">
              <li className="text-[16px] ml-[1px]">
                🎖️ Top Entries: NDA, CDS, AFCAT, Agniveer
              </li>
              <li className="text-[16px] ml-[1px]">
                🧑‍🎓 Eligibility: 10th, 12th, or Graduation
              </li>
              <li className="text-[16px] ml-[1px]">
                📋 Selection: Written Exam ➤ SSB Interview ➤ Physical & Medical
                Tests
              </li>
              <li className="text-[16px] ml-[1px]">
                🕒 Age Limit: Usually 16.5–25 years
              </li>
              <li className="text-[16px] ml-[1px]">
                🪖 Branches: Indian Army, Navy, Air Force, Coast Guard
              </li>
            </p>
          </div>
          <div className="card-btn">
            <Link to={"https://en.wikipedia.org/wiki/Defense"}>
              <button
                className="btn border-2 rounded-2xl border-black w-[122px] p-3 -ml-[24rem] cursor-pointer
                     mt-[10rem] bg-[#7fb078] max-[1000px]:w-[80px] max-[1000px]:mt-[5rem] max-[1000px]:ml-[-10rem] max-[1000px]:text-[10px]"
              >
                Read More
              </button>
            </Link>
          </div>
        </div>

        <div
          className="card4  card relative  flex justify-items-start gap-[73px] border-2 border-black w-[42rem] ml-[48rem] mt-[70px] rounded-2xl cursor-pointer overflow-hidden  max-[1000px]:h-[10rem] max-[1000px]:w-[20rem] max-[1000px]:rounded-[10px] max-[1000px]:ml-[20rem] max-[1000px]:gap-[50px]"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="railway w-[30em]">
            <img
              src={railway}
              alt=""
              className="w-[23rem] h-[20rem] ml-[2rem] mt-[55px] rounded-2xl max-[1000px]:w-[16rem] max-[1000px]:h-[7rem] max-[1000px]:mt-[1em]"
            />
          </div>
          <div className="cards-detail  max-[1000px]:hidden">
            <h1 className="title text-[19px] mt-[15px] text-center font-serif">
              Railway Jobs (RRB Exams)
            </h1>
            <p className="detail mt-[3px] leading-[31px]">
              <li className="text-[16px] ml-[1px]">
                🚆 Top Posts: Station Master, Junior Engineer, Technician, Group
                D
              </li>
              <li className="text-[16px] ml-[1px]">
                🧑‍🎓 Eligibility: 10th, 12th, Diploma, or Graduation
              </li>
              <li className="text-[16px] ml-[1px]">
                📝 Popular Exams: RRB NTPC, RRB Group D, RRB JE, RRB ALP
              </li>
              <li className="text-[16px] ml-[1px]">
                🕒 Age Limit: 18–33 years (varies by category)
              </li>
              <li className="text-[16px] ml-[1px]">
                📋 Selection Process: CBT (Prelims & Mains), Skill/Physical
                Test, Document Verification
              </li>
            </p>
          </div>
          <div className="card-btn">
            <Link to={"https://en.wikipedia.org/wiki/Railway_jobs"}>
              <button
                className="btn border-2 rounded-2xl border-black w-[122px] p-3 -ml-[24rem] cursor-pointer
                     mt-[10rem] bg-[#7fb078] max-[1000px]:w-[80px] max-[1000px]:mt-[5rem] max-[1000px]:ml-[-10rem] max-[1000px]:text-[10px]"
              >
                Read More
              </button>
            </Link>
          </div>
        </div>

        <div
          className="card5  card relative  flex justify-items-start gap-[73px] border-2 border-black w-[42rem] ml-[9rem] mt-[70px] rounded-2xl cursor-pointer overflow-hidden  max-[1000px]:h-[10rem] max-[1000px]:w-[20rem] max-[1000px]:rounded-[10px] max-[1000px]:ml-[20rem] max-[1000px]:gap-[50px]"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="teaching">
            <img
              src={teaching}
              alt=""
              className="w-[23rem] h-[20rem] ml-[2rem] mt-[55px] rounded-2xl max-[1000px]:w-[16rem] max-[1000px]:h-[7rem] max-[1000px]:mt-[1em]"
            />
          </div>
          <div className="cards-detail  max-[1000px]:hidden">
            <h1 className="title text-[19px] mt-[15px] text-center font-serif">
              Teaching Jobs (Government Schools & Colleges)
            </h1>
            <p className="detail mt-[3px] leading-[31px]">
              <li className="text-[16px] ml-[1px]">
                👩‍🏫 Popular Roles: Primary Teacher, TGT, PGT, Assistant Professor
              </li>
              <li className="text-[16px] ml-[1px]">
                📚 Exams: CTET, UPTET, REET, KVS, NVS, DSSSB, UGC-NET
              </li>
              <li className="text-[16px] ml-[1px]">
                🎓 Eligibility: B.Ed / D.El.Ed / Postgraduate + NET (varies by
                level)
              </li>
              <li className="text-[16px] ml-[1px]">
                🕒 Age Limit: 18–40 years (varies by post & category)
              </li>
              <li className="text-[16px] ml-[1px]">
                📝 Selection: Written Test ➤ Interview / Demo Class
              </li>
            </p>
          </div>
          <div className="card-btn">
            <Link to={"https://en.wikipedia.org/wiki/Teaching_job"}>
              <button
                className="btn border-2 rounded-2xl border-black w-[122px] p-3 -ml-[24rem] cursor-pointer
                     mt-[10rem] bg-[#7fb078] max-[1000px]:w-[80px] max-[1000px]:mt-[5rem] max-[1000px]:ml-[-10rem] max-[1000px]:text-[10px]"
              >
                Read More
              </button>
            </Link>
          </div>
        </div>

        <div
          className="card6  card relative  flex justify-items-start gap-[73px] border-2 border-black w-[42rem] ml-[48rem] mt-[70px] rounded-2xl cursor-pointer overflow-hidden  max-[1000px]:h-[10rem] max-[1000px]:w-[20rem] max-[1000px]:rounded-[10px] max-[1000px]:ml-[20rem] max-[1000px]:gap-[50px]"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="law w-[30em]">
            <img
              src={law}
              alt=""
              className="w-[23rem] h-[20rem] ml-[2rem] mt-[55px] rounded-2xl max-[1000px]:w-[16rem] max-[1000px]:h-[7rem] max-[1000px]:mt-[1em] "
            />
          </div>
          <div className="cards-detail  max-[1000px]:hidden">
            <h1 className="title text-[19px] mt-[15px] text-center font-serif">
              Law & Judiciary Jobs (Judicial Services / Legal Officers)
            </h1>
            <p className="detail mt-[3px] leading-[31px]">
              <li className="text-[16px] ml-[1px]">
                ⚖️ Top Roles: Judge (via PCS-J), Legal Advisor, Public
                Prosecutor, Law Officer
              </li>
              <li className="text-[16px] ml-[1px]">
                📚 Exams: PCS-J (Judicial Services), SEBI Legal, IBPS Law
                Officer, UPSC Law
              </li>
              <li className="text-[16px] ml-[1px]">
                🎓 Eligibility: LLB (3 or 5 years), enrollment with Bar Council
                (for some posts)
              </li>
              <li className="text-[16px] ml-[1px]">
                🕒 Age Limit: 21–35 years (varies by state and post)
              </li>
              <li className="text-[16px] ml-[1px]">
                📝 Selection: Prelims ➤ Mains ➤ Interview ➤ Document
                Verification
              </li>
            </p>
          </div>
          <div className="card-btn">
            <Link to={"https://en.wikipedia.org/wiki/Law"}>
              <button
                className="btn border-2 rounded-2xl border-black w-[122px] p-3 -ml-[24rem] cursor-pointer
                     mt-[10rem] bg-[#7fb078] max-[1000px]:w-[80px] max-[1000px]:mt-[5rem] max-[1000px]:ml-[-10rem] max-[1000px]:text-[10px]"
              >
                Read More
              </button>
            </Link>
          </div>
        </div>

        <div
          className="card7  card relative  flex justify-items-start gap-[73px] border-2 border-black w-[42rem] ml-[9rem] mt-[70px] rounded-2xl cursor-pointer overflow-hidden  max-[1000px]:h-[10rem] max-[1000px]:w-[20rem] max-[1000px]:rounded-[10px] max-[1000px]:ml-[20rem] max-[1000px]:gap-[50px]"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="miscellanous">
            <img
              src={miss}
              alt=""
              className="w-[23rem] h-[20rem] ml-[2rem] mt-[1em] rounded-2xl max-[1000px]:w-[16rem] max-[1000px]:h-[7rem] max-[1000px]:mt-[1em]"
            />
          </div>
          <div className="cards-detail  max-[1000px]:hidden">
            <h1 className="title text-[25px] mt-[15px] text-center font-serif">
              Miscellaneous Govt. Jobs
            </h1>
            <p className="detail mt-[3px] leading-[26px]">
              <li className="text-[16px] ml-[1px]">
                🏢 Departments: ISRO, DRDO, FCI, LIC, ESIC, IB, SSC MTS, Indian
                Post, etc.
              </li>
              <li className="text-[16px] ml-[1px]">
                🧑‍🎓 Eligibility: Varies from 10th pass to postgraduates (based on
                role)
              </li>
              <li className="text-[16px] ml-[1px]">
                📝 Popular Exams: ISRO Technical, DRDO CEPTAM, LIC AAO, FCI
                Manager, IB ACIO
              </li>
              <li className="text-[16px] ml-[1px]">
                🕒 Age Limit: 18–35 years (varies by post and department)
              </li>
              <li className="text-[16px] ml-[1px]">
                📋 Selection: Written Test ➤ Skill Test / Interview ➤ Document
                Verification
              </li>
            </p>
          </div>
          <div className="card-btn">
            <Link
              to={
                "https://uk.indeed.com/career-advice/finding-a-job/is-miscellaneous-a-good-career-path"
              }
            >
              <button
                className="btn border-2 rounded-2xl border-black w-[122px] p-3 -ml-[24rem] cursor-pointer
                     mt-[10rem] bg-[#7fb078] max-[1000px]:w-[80px] max-[1000px]:mt-[5rem] max-[1000px]:ml-[-10rem] max-[1000px]:text-[10px]"
              >
                Read More
              </button>
            </Link>
          </div>
        </div>

        <div
          className="card8  card relative  flex justify-items-start gap-[73px] border-2 border-black w-[42rem] ml-[48rem] mt-[70px] rounded-2xl cursor-pointer overflow-hidden  max-[1000px]:h-[10rem] max-[1000px]:w-[20rem] max-[1000px]:rounded-[10px] max-[1000px]:ml-[20rem] max-[1000px]:gap-[50px]"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="postoffice w-[30em]">
            <img
              src={post}
              alt=""
              className="w-[23rem] h-[22rem] ml-[2rem] mt-[3em] rounded-2xl max-[1000px]:w-[16rem] max-[1000px]:h-[7rem] max-[1000px]:mt-[1em]"
            />
          </div>
          <div className="cards-detail  max-[1000px]:hidden">
            <h1 className="title text-[25px] mt-[15px] text-center font-serif">
              Post Office Jobs (India Post)
            </h1>
            <p className="detail mt-[3px] leading-[26px]">
              <li className="text-[16px] ml-[1px]">
                📮 Popular Roles: Gramin Dak Sevak (GDS), Postman, Mail Guard,
                Postal Assistant, Sorting Assistant
              </li>
              <li className="text-[16px] ml-[1px]">
                🧑‍🎓 Eligibility: 10th or 12th pass (varies by post)
              </li>
              <li className="text-[16px] ml-[1px]">
                🕒 Age Limit: 18–32 years (age relaxation for reserved
                categories)
              </li>
              <li className="text-[16px] ml-[1px]">
                📝 Selection Process: Merit-based (10th marks) or Written Exam
                (for some posts) ➤ Document Verification
              </li>
              <li className="text-[16px] ml-[1px]">
                💼 Departments: Postal Circles (State-wise recruitment)
              </li>
            </p>
          </div>
          <div className="card-btn">
            <Link to={"https://en.wikipedia.org/wiki/Post_office"}>
              <button
                className="btn border-2 rounded-2xl border-black w-[122px] p-3 -ml-[24rem] cursor-pointer
                     mt-[10rem] bg-[#7fb078] max-[1000px]:w-[80px] max-[1000px]:mt-[5rem] max-[1000px]:ml-[-10rem] max-[1000px]:text-[10px]"
              >
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Government;

import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";

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
    <div className="com-container bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="comerece-heading flex items-center justify-between bg-[#DBFFCB] px-10 py-4 shadow">
        <div
          className="back cursor-pointer"
          onClick={handleGoBack}
          data-aos="fade-right"
        >
          <MdArrowBack className="size-8 text-gray-700 hover:text-black" />
        </div>
        <div
          className="heading text-[28px] md:text-[35px] font-serif text-center w-full text-gray-800"
          data-aos="fade-down-right"
        >
          WELCOME TO GOVERNMENT PAGE
        </div>
      </div>

      {/* Intro Section */}
      <div className="Q mt-10 px-6 md:px-24" data-aos="fade-up">
        <h2 className="text-[22px] md:text-[26px] font-semibold leading-[40px] text-gray-800">
          Why Preparing For Government Exam After 10th?
        </h2>
        <p className="text-[16px] font-serif mt-3 text-gray-600 max-w-4xl">
          Government jobs are one of the most secure and respected career paths
          in India. Here are the top options you can consider based on your
          qualification:
        </p>
      </div>

      {/* Examples */}
      <div className="hidden md:block example mt-10 px-24">
        <div className="fewoptions mt-6" data-aos="fade-right">
          <h1 className="text-[21px] font-semibold">
            1. Indian Army (Soldier GD, Tradesman)
          </h1>
          <ul className="leading-[30px] ml-6 text-gray-700">
            <li>Eligibility: 10th pass</li>
            <li>Age Limit: 17.5 to 21 years</li>
            <li>Selection: Physical Test + Written Exam</li>
            <li>Perks: Job security, uniform service, pension</li>
          </ul>
        </div>

        <div className="fewoptions mt-6" data-aos="fade-left">
          <h1 className="text-[21px] font-semibold">2. Railway Group D</h1>
          <ul className="leading-[30px] ml-6 text-gray-700">
            <li>Eligibility: 10th pass</li>
            <li>Age Limit: 18 to 33 years</li>
            <li>Selection: CBT + Physical + Medical</li>
            <li>Departments: Track maintainer, porter, helper, etc.</li>
          </ul>
        </div>

        <div className="fewoptions mt-6" data-aos="fade-right">
          <h1 className="text-[21px] font-semibold">
            3. SSC CHSL (LDC, Data Entry Operator)
          </h1>
          <ul className="leading-[30px] ml-6 text-gray-700">
            <li>Eligibility: 12th pass</li>
            <li>Age Limit: 18 to 27 years</li>
            <li>Exam Stages: Tier 1, Tier 2, Typing Test</li>
            <li>Salary: ₹25,000 – ₹40,000</li>
          </ul>
        </div>

        <div className="fewoptions mt-6" data-aos="fade-left">
          <h1 className="text-[21px] font-semibold">
            4. NDA (National Defence Academy)
          </h1>
          <ul className="leading-[30px] ml-6 text-gray-700">
            <li>Eligibility: 12th pass (PCM for Air Force & Navy)</li>
            <li>Age Limit: 16.5 to 19.5 years</li>
            <li>Selection: UPSC Exam + SSB Interview + Medical</li>
            <li>Services: Indian Army, Navy, Air Force</li>
          </ul>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 px-6 md:px-20">
        {/* Civil Services */}
        <Card
          img={civil}
          title="Civil Services"
          details={[
            "📌 Top Posts: IAS, IPS, IFS, IRS",
            "🧑‍🎓 Eligibility: Graduation in any stream",
            "📊 Exam Stages: Prelims ➤ Mains ➤ Interview",
            "🕒 Age Limit: 21–32 years (General)",
            "📖 Conducted By: UPSC (annually)",
          ]}
          link="https://en.wikipedia.org/wiki/Civil_Services_of_India"
        />

        {/* Banking */}
        <Card
          img={bank}
          title="Banking Exams (SBI / IBPS / RBI)"
          details={[
            "🏦 Top Roles: PO, Clerk, Specialist Officer",
            "📚 Popular Exams: SBI PO, IBPS PO/Clerk, RBI Grade B",
            "🎓 Eligibility: Graduation in any stream",
            "🧠 Selection: Prelims ➤ Mains ➤ Interview",
            "🕒 Age Limit: 20–30 years",
          ]}
          link="https://www.shiksha.com/sarkari-exams/banking/articles/10-best-bank-exams-blogId-40681"
        />

        {/* Defence */}
        <Card
          img={defense}
          title="Defence Exams (Army / Navy / Air Force)"
          details={[
            "🎖️ Top Entries: NDA, CDS, AFCAT, Agniveer",
            "🧑‍🎓 Eligibility: 10th, 12th, or Graduation",
            "📋 Selection: Written ➤ SSB ➤ Physical & Medical",
            "🕒 Age Limit: 16.5–25 years",
            "🪖 Branches: Army, Navy, Air Force, Coast Guard",
          ]}
          link="https://en.wikipedia.org/wiki/Defense"
        />

        {/* Railway */}
        <Card
          img={railway}
          title="Railway Jobs (RRB Exams)"
          details={[
            "🚆 Top Posts: Station Master, JE, Technician, Group D",
            "🧑‍🎓 Eligibility: 10th, 12th, Diploma, Graduation",
            "📝 Popular Exams: RRB NTPC, Group D, JE, ALP",
            "🕒 Age Limit: 18–33 years",
            "📋 Selection: CBT ➤ Skill/Physical ➤ DV",
          ]}
          link="https://en.wikipedia.org/wiki/Railway_jobs"
        />

        {/* Teaching */}
        <Card
          img={teaching}
          title="Teaching Jobs"
          details={[
            "👩‍🏫 Roles: Primary Teacher, TGT, PGT, Professor",
            "📚 Exams: CTET, UPTET, REET, KVS, UGC-NET",
            "🎓 Eligibility: B.Ed / D.El.Ed / Postgraduate",
            "🕒 Age Limit: 18–40 years",
            "📝 Selection: Written ➤ Interview/Demo Class",
          ]}
          link="https://en.wikipedia.org/wiki/Teaching_job"
        />

        {/* Law */}
        <Card
          img={law}
          title="Law & Judiciary Jobs"
          details={[
            "⚖️ Roles: Judge, Legal Advisor, Prosecutor",
            "📚 Exams: PCS-J, SEBI Legal, IBPS Law Officer",
            "🎓 Eligibility: LLB, Bar Council Enrollment",
            "🕒 Age Limit: 21–35 years",
            "📝 Selection: Prelims ➤ Mains ➤ Interview",
          ]}
          link="https://en.wikipedia.org/wiki/Law"
        />

        {/* Miscellaneous */}
        <Card
          img={miss}
          title="Miscellaneous Govt. Jobs"
          details={[
            "🏢 Departments: ISRO, DRDO, FCI, LIC, ESIC, IB",
            "🧑‍🎓 Eligibility: 10th pass to Postgraduate",
            "📝 Exams: ISRO, DRDO CEPTAM, LIC AAO, FCI Manager",
            "🕒 Age Limit: 18–35 years",
            "📋 Selection: Written ➤ Skill/Interview ➤ DV",
          ]}
          link="https://uk.indeed.com/career-advice/finding-a-job/is-miscellaneous-a-good-career-path"
        />
      </div>
    </div>
  );
};

// Reusable Card Component
const Card = ({ img, title, details, link }) => (
  <div
    className="card relative flex flex-col md:flex-row items-center border-2 border-black rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    data-aos="fade-up"
  >
    <img
      src={img}
      alt={title}
      className="w-full md:w-[18rem] h-[12rem] md:h-[16rem] object-cover rounded-t-2xl md:rounded-l-2xl"
    />
    <div className="flex-1 p-4 hidden md:block">
      <h1 className="title text-[20px] font-serif text-center font-semibold mb-2">
        {title}
      </h1>
      <ul className="text-[15px] leading-[28px] text-gray-700">
        {details.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    </div>
    <div className="absolute bottom-3 left-3">
      <Link to={link} target="_blank" rel="noopener noreferrer">
        <button className="btn border-2 rounded-xl border-black px-4 py-2 bg-[#7fb078] text-sm hover:bg-green-600 transition">
          Read More
        </button>
      </Link>
    </div>
  </div>
);

export default Government;

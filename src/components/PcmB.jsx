import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";

const PcmB = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
  }, []);

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center bg-[#DBFFCB] px-6 md:px-16 h-[80px]">
        <div
          className="cursor-pointer flex items-center"
          onClick={handleGoBack}
        >
          <MdArrowBack className="text-2xl md:text-3xl" />
        </div>
        <h1
          className="text-xl md:text-3xl font-serif text-center"
          data-aos="fade-down-right"
        >
          WELCOME TO PCM/B PAGE
        </h1>
        <div className="w-6 md:w-12"></div>
      </div>

      {/* Intro */}
      <div className="mt-10 px-6 md:px-20 text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-bold">
          Why Choose PCMB After 10th?
        </h2>
        <p className="text-sm md:text-base font-serif mt-2 max-w-4xl mx-auto md:mx-0">
          It opens both paths for you – Medical and Engineering. Each stream
          opens a unique world of opportunities.
        </p>
      </div>

      {/* PCMB Info */}
      <div className="px-6 md:px-20 mt-8">
        <h1 className="text-lg md:text-xl font-semibold">PCMB</h1>
        <h2 className="text-sm md:text-base">
          Ideal for: Students who want both engineering and medical options open
        </h2>
        <ul className="list-disc pl-6 mt-2 space-y-1 text-sm md:text-base">
          <li>Can appear for JEE + NEET</li>
          <li>
            Biomedical Engineering, Genetic Engineering, Research in Biotech,
            Data Science in Healthcare
          </li>
          <li>Skills: Time management, flexibility, balance</li>
          <li>Challenge: Higher study load, needs clarity on future goals</li>
        </ul>
      </div>

      {/* Career Options */}
      <div className="px-6 md:px-20 mt-12">
        <h1 className="text-2xl font-sans text-center mb-10">
          🎓 Career Options After Choosing PCM + Biology (PCMB)
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "MBBS (Bachelor of Medicine & Surgery)",
              link: "https://www.tmu.ac.in/blog/mbbs-course-details-full-form-fees-eligibility-duration-syllabus-admission-college-and-career",
              desc: "5.5-year program (with internship). Admission via NEET-UG. Specializations include cardiology, surgery, pediatrics, dermatology, etc.",
            },
            {
              title: "BDS (Bachelor of Dental Surgery)",
              link: "https://www.shiksha.com/bds-bachelor-of-dental-surgery-chp",
              desc: "5-year degree to become a dentist. Requires NEET-UG. Opportunities in clinics, hospitals, or MDS specialization.",
            },
            {
              title: "B.Tech in Biotechnology / Biomedical Engineering",
              link: "https://www.shiksha.com/engineering/btech-in-biotechnology-engineering-chp",
              desc: "4-year degree blending biology + engineering. Covers gene therapy, medical devices, pharma research.",
            },
            {
              title: "B.Pharmacy (Bachelor of Pharmacy)",
              link: "https://www.shiksha.com/b-pharmacy-chp",
              desc: "4-year degree in pharmacology, drug research, formulation. Jobs in pharma, hospitals, clinical trials.",
            },
            {
              title: "Neuroscience / Cognitive Science",
              link: "https://en.wikipedia.org/wiki/Neuroscience",
              desc: "Interdisciplinary field studying brain + psychology. Offered at IISc, IITs, central universities.",
            },
            {
              title: "Clinical Research & Medical Lab Technology",
              link: "https://en.wikipedia.org/wiki/Clinical_research",
              desc: "Covers diagnostics, drug trials, blood analysis, quality assurance. Degree: BMLT / B.Sc.",
            },
            {
              title: "Environmental Science / Ecology / Forestry",
              link: "https://en.wikipedia.org/wiki/Environmental_science",
              desc: "Focus on sustainability. Degrees: B.Sc. / B.Tech. Careers in MOEF, NGOs, research orgs.",
            },
            {
              title: "Cognitive & Brain Sciences",
              link: "https://www.fortinet.com/resources/cyberglossary/what-is-cognitive-science#:~:text=is%20cognitive%20science%3F-,Cognitive%20science%20is%20an%20investigatory%20discipline",
              desc: "Studies memory, attention, learning. Programs at IITs & IISc. Jobs in AI, UX, neuropsychology.",
            },
            {
              title: "Food Technology / Nutrition Science",
              link: "https://en.wikipedia.org/wiki/Food_technology",
              desc: "Focus on food innovation, safety, and dietetics. Careers in FMCG, nutrition consultancy.",
            },
            {
              title: "Scientific Research (via IISER/NISER/IITs)",
              link: "https://en.wikipedia.org/wiki/Scientist",
              desc: "Integrated BS-MS in sciences. Entrance: IAT, NEST, JEE. Ideal for Ph.D. and academia.",
            },
            {
              title: "Artificial Intelligence in Healthcare",
              link: "https://en.wikipedia.org/wiki/Artificial_intelligence_in_healthcare",
              desc: "Blend of PCMB + AI. Roles in diagnostics, drug discovery, predictive medicine.",
            },
            {
              title: "Health Informatics / Medical Coding",
              link: "https://en.wikipedia.org/wiki/Health_informatics",
              desc: "Focus on hospital systems, patient data, analytics. Jobs in IT-health companies, insurance, hospitals.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="border-4 border-[#526E48] rounded-2xl p-5 flex flex-col justify-between shadow-lg bg-white"
              data-aos="fade-up"
            >
              <h2 className="text-lg font-semibold text-center">
                {card.title}
              </h2>
              <p className="text-sm mt-3 flex-grow">{card.desc}</p>
              <Link to={card.link} target="_blank" rel="noopener noreferrer">
                <button className="mt-4 px-4 py-2 bg-[#62825D] text-white rounded-lg hover:bg-[#526E48] transition">
                  Read More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PcmB;

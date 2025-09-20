import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { MdArrowBack } from "react-icons/md";

import medical from "./images/medical.jpg";
import bioresearch from "./images/bioreasearch.jpg";
import agriculture from "./images/aggriculture.jpg";
import emerging from "./images/emerging.avif";

// ✅ PCB STREAM FIELDS
const pcbCards = [
  {
    title: "Medical and Allied Health Science",
    img: medical,
    points: [
      "Focuses on diagnosing, treating, and preventing illnesses.",
      "Includes MBBS, BDS, BAMS, Physiotherapy, Nursing, Radiology, etc.",
      "Critical role in public health, emergency care, rehabilitation.",
      "Emphasizes clinical skills & biomedical knowledge.",
    ],
    link: "https://www.telegraphindia.com/edugraph/colleges/ranking/stream-allied-health-sciences/134",
  },
  {
    title: "Biological Science and Research",
    img: bioresearch,
    points: [
      "Understanding living organisms from cells to ecosystems.",
      "Combines biology, chemistry, and scientific investigation.",
      "Fields like genetics, biotech, microbiology, ecology.",
      "Involves experiments, data analysis, and discovery.",
      "Drives innovation in healthcare, agriculture, conservation.",
    ],
    link: "https://www.csir.res.in/Biological-sciences",
  },
  {
    title: "Agriculture and Environmental Science",
    img: agriculture,
    points: [
      "Focuses on sustainable farming & conservation.",
      "Combines biology, ecology & technology.",
      "Addresses climate change, biodiversity, food security.",
      "Drives green technologies & eco-friendly farming.",
    ],
    link: "https://www.tandfonline.com/environment-agriculture",
  },
  {
    title: "Interdisciplinary and Emerging Fields",
    img: emerging,
    points: [
      "Blends biology with technology, psychology, forensic science.",
      "Includes biotechnology, genomics, nutrition, psychology.",
      "Encourages innovation across healthcare & food sectors.",
      "Supports research, diagnostics, data science & personalized medicine.",
    ],
    link: "https://www.ncbi.nlm.nih.gov/books/NBK22616/",
  },
];

// ✅ OTHER CAREER OPTIONS
const otherOptions = [
  {
    title: "B.Sc",
    desc: "B.Sc (Bachelor of Science) focuses on science & technical subjects. Careers in research, IT, healthcare, or higher studies.",
    link: "https://www.shiksha.com/bsc-chp",
  },
  {
    title: "B.E/B.Tech",
    desc: "Engineering & technology degree (4 years). Opens jobs in IT, R&D, manufacturing, consultancy, government exams.",
    link: "https://www.shiksha.com/be-btech-chp",
  },
  {
    title: "LLB",
    desc: "Law degree preparing students for careers as lawyers, judges, and legal advisors. Available as 3-year or 5-year integrated.",
    link: "https://www.shiksha.com/ll-b-chp",
  },
  {
    title: "BBA",
    desc: "Bachelor of Business Administration trains students in management, finance, HR, and entrepreneurship.",
    link: "https://www.shiksha.com/bba-bachelor-of-business-administration-chp",
  },
  {
    title: "CPL",
    desc: "Commercial Pilot License allows working as a pilot for airlines, cargo, or private jets.",
    link: "https://www.amecet.in/commercial-pilot-license-admission-process.php",
  },
  {
    title: "BHM",
    desc: "Bachelor of Hotel Management prepares students for hospitality, events, tourism, and hotel operations.",
    link: "https://www.shiksha.com/bhm-bachelor-of-hotel-management-chp",
  },
  {
    title: "NDA",
    desc: "National Defence Academy trains cadets of the Army, Navy & Air Force before joining respective academies.",
    link: "https://en.wikipedia.org/wiki/National_Defence_Academy_(India)",
  },
  {
    title: "Air Force",
    desc: "Indian Air Force career with opportunities in flying, engineering, and technical branches.",
    link: "https://indianairforce.nic.in/",
  },
];

const Pcb = () => {
  const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1);
    };
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-green-50 min-h-screen py-10 px-4 font-sans">
      <div
                className="back -ml-[22rem] mt-[2rem] max-[1000px]:ml-[6rem] max-[1000px]:mt-[1rem]"
                onClick={handleGoBack}
              >
                <MdArrowBack className="max-[1000px]:size-[2rem]" />
              </div>
      {/* HEADER */}
      <h1 className="text-3xl font-bold text-center text-green-800 mb-4">
        PCB Career Opportunities
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Explore diverse career paths in Medical, Biological, Environmental, and
        other fields.
      </p>

      {/* PCB STREAM CARDS */}
      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {pcbCards.map((card, i) => (
          <div
            key={i}
            className="flex flex-col bg-white border-2 border-black rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-transform hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay={i * 200}
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5 flex flex-col justify-between flex-1">
              <h2 className="text-xl font-semibold text-green-700 mb-3 text-center md:text-left">
                {card.title}
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                {card.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
              <div className="mt-4 flex justify-center md:justify-start">
                <Link to={card.link} target="_blank">
                  <button className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* OTHER OPTIONS */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center text-green-800 mb-8">
          Other Options
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
          {otherOptions.map((opt, i) => (
            <div
              key={i}
              className="bg-white border-4 border-green-700 rounded-2xl p-5 flex flex-col justify-between shadow-md hover:shadow-xl transition-transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <h3 className="text-xl font-semibold text-center mb-3">
                {opt.title}
              </h3>
              <p className="text-sm text-gray-700 flex-1">{opt.desc}</p>
              <div className="mt-4 flex justify-center">
                <Link to={opt.link} target="_blank">
                  <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 mt-16">
        © 2025 Future Guide | PCB Stream
      </footer>
    </div>
  );
};

export default Pcb;

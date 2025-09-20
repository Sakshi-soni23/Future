import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { MdArrowBack } from "react-icons/md";

// ✅ PCM STREAM FIELDS
import computerimg from "./images/computer.avif";
import eleimg from "./images/elextrical.avif";
import civilimg from "./images/civil.avif";
import mechanicalimg from "./images/mechanical.avif";
import pcmimg from "./images/pcm.avif";

// Main PCM cards
const pcmCards = [
  {
    title: "Computer Science",
    img: computerimg,
    points: [
      "Focuses on software, algorithms, and computing systems.",
      "Includes AI, Machine Learning, Cybersecurity, and Cloud.",
      "Combines programming, data structures, and problem-solving.",
      "Careers in IT, research, product development.",
    ],
    link: "https://en.wikipedia.org/wiki/Computer_science",
  },
  {
    title: "Electrical Engineering",
    img: eleimg,
    points: [
      "Design and application of electrical systems and devices.",
      "Covers power systems, electronics, communication.",
      "Key in smart grids, renewable energy, robotics.",
      "Opportunities in telecom, EVs, automation.",
    ],
    link: "https://www.mtu.edu/ece/undergraduate/electrical/what-is/",
  },
  {
    title: "Mechanical Engineering",
    img: mechanicalimg,
    points: [
      "Deals with machines, design, and manufacturing.",
      "Core subjects: thermodynamics, mechanics, materials.",
      "Applications in automobiles, aerospace, robotics.",
      "Wide job scope in R&D, production, automation.",
    ],
    link: "https://en.wikipedia.org/wiki/Mechanical_engineering",
  },
  {
    title: "Civil Engineering",
    img: civilimg,
    points: [
      "Focuses on infrastructure like bridges, roads, buildings.",
      "Combines design, construction, and safety management.",
      "Important for urban development and smart cities.",
      "Growing demand in sustainable construction.",
    ],
    link: "https://en.wikipedia.org/wiki/Civil_engineering",
  },
];

// ✅ OTHER CAREER OPTIONS
const otherOptions = [
  {
    title: "B.Sc",
    desc: "Bachelor of Science degree with focus on Physics, Chemistry, Mathematics, or Computer Science.",
    link: "https://www.shiksha.com/bsc-chp",
  },
  {
    title: "BCA",
    desc: "Bachelor of Computer Applications trains in programming, software, and IT industry skills.",
    link: "https://www.shiksha.com/bca-chp",
  },
  {
    title: "B.E/B.Tech",
    desc: "Engineering degree across multiple branches: CS, IT, Civil, Mechanical, etc.",
    link: "https://www.shiksha.com/be-btech-chp",
  },
  {
    title: "LLB",
    desc: "Law degree for careers in judiciary, legal consultancy, corporate law.",
    link: "https://www.shiksha.com/ll-b-chp",
  },
  {
    title: "BBA",
    desc: "Management degree preparing for careers in business, HR, finance, and startups.",
    link: "https://www.shiksha.com/bba-bachelor-of-business-administration-chp",
  },
  {
    title: "CPL",
    desc: "Commercial Pilot License – aviation career as professional pilot.",
    link: "https://www.amecet.in/commercial-pilot-license-admission-process.php",
  },
  {
    title: "NDA",
    desc: "National Defence Academy entry for Army, Navy, and Air Force cadets.",
    link: "https://en.wikipedia.org/wiki/National_Defence_Academy_(India)",
  },
  {
    title: "Indian Air Force",
    desc: "Career in aviation, engineering, and defense services.",
    link: "https://indianairforce.nic.in/",
  },
];

const Pcm = () => {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-green-50 min-h-screen py-10 px-4 font-sans">
      {/* Back Button */}
      <div
        className="cursor-pointer -ml-[22rem] mt-[2rem] max-[1000px]:ml-[6rem] max-[1000px]:mt-[1rem]"
        onClick={handleGoBack}
      >
        <MdArrowBack className="max-[1000px]:size-[2rem]" />
      </div>

      {/* Header */}
      <h1 className="text-3xl font-bold text-center text-green-800 mb-4">
        PCM Career Opportunities
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Explore diverse career paths in Engineering, Technology, Research, and
        other fields.
      </p>

      {/* PCM Stream Cards */}
      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {pcmCards.map((card, i) => (
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

      {/* Other Career Options */}
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

      {/* Footer */}
      <footer className="text-center text-gray-500 mt-16">
        © 2025 Future Guide | PCM Stream
      </footer>
    </div>
  );
};

export default Pcm;

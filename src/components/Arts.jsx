import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";

import law from "./images/law.jpg";
import government from "./images/government.jpg";
import psychology from "./images/psychology.jpg";
import journalism from "./images/journalism.jpg";
import FineArts from "./images/FineArts.jpg";
import socialwork from "./images/socialwork.jpg";

const Arts = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#DBFFCB] px-4 md:px-12 py-4 shadow-md">
        <div
          className="text-2xl cursor-pointer text-[#526E48]"
          onClick={handleGoBack}
        >
          <MdArrowBack />
        </div>
        <h1
          className="text-xl md:text-3xl font-serif text-center text-[#526E48]"
          data-aos="fade-down-right"
        >
          WELCOME TO ART PAGE
        </h1>
        <div className="w-6" /> {/* Empty div to balance flex */}
      </div>

      {/* Why Choose Arts */}
      <div className="px-6 md:px-20 mt-10">
        <h2 className="text-xl md:text-2xl font-semibold text-[#526E48]">
          Why Choose ART After 10th?
        </h2>
        <p className="text-base md:text-lg font-serif mt-2 leading-relaxed">
          Arts is the stream for students interested in humanities, social
          sciences, languages, creativity, and public service. It offers a broad
          range of subjects that promote analytical thinking, creativity, and
          communication skills. Careers in civil services, law, design, media,
          psychology, and more await you.
        </p>
      </div>

      {/* Subjects */}
      <div className="px-6 md:px-20 mt-10">
        <h2 className="text-xl md:text-2xl font-semibold text-[#526E48]">
          🏷️ Core Subjects in Arts (11th & 12th)
        </h2>
        <ul className="list-disc pl-6 mt-3 text-base md:text-lg font-serif space-y-2">
          <li>History</li>
          <li>Political Science</li>
          <li>Sociology</li>
          <li>Psychology</li>
          <li>Economics</li>
          <li>Geography</li>
          <li>English</li>
          <li>
            Optional: Fine Arts / Physical Education / Home Science / Philosophy
          </li>
        </ul>
      </div>

      {/* Combinations */}
      <div className="px-6 md:px-20 mt-10">
        <h2 className="text-xl md:text-2xl font-semibold text-[#526E48]">
          Popular Combinations Recap:
        </h2>
        <ul className="mt-3 space-y-2 text-base md:text-lg">
          <li>Arts + Psychology + Sociology → Social Work, Psychology</li>
          <li>Arts + History + Political Science → UPSC, Law, Journalism</li>
          <li>
            Arts + Geography + Economics → Urban Planning, Environmental Studies
          </li>
          <li>
            Arts + English + Psychology → Counseling, Teaching, Journalism
          </li>
          <li>Arts + Fine Arts + English → Design, Creative Writing</li>
          <li>
            Arts + Hindi/Regional Language + Mass Media → Journalism, Content
            Creation
          </li>
        </ul>
      </div>

      {/* Cards Section */}
      <div className="mt-16 flex flex-col gap-10 items-center px-4 md:px-10">
        <Card
          img={psychology}
          title="Psychology & Counseling"
          link="https://www.psychologydiscussion.net/notes/psychology-notes/educational-psychology-psychology-notes/counselling-definition-and-characteristics-psychology/2655"
          points={[
            "Studies human behavior, mental health, emotional and cognitive processes.",
            "Works in clinics, hospitals, schools, rehabilitation centers.",
            "Careers: Clinical Psychologist, Counselor, School Psychologist.",
            "Courses: BA Psychology → MA/MPhil/PhD. Needs empathy & communication.",
          ]}
        />

        <Card
          img={government}
          title="Civil Services & Government Jobs"
          link="https://pwonlyias.com/upsc-notes/civil-services-in-india/"
          points={[
            "Administration & governance through UPSC, State PSC exams.",
            "Works in ministries, departments, PSUs.",
            "Careers: IAS, IPS, IFS, IRS, Defence, SSC roles.",
            "Courses: Any BA + UPSC/PSC prep. Needs GK & reasoning.",
          ]}
        />

        <Card
          img={journalism}
          title="Media, Journalism & Communication"
          link="https://jgu.edu.in/blog/2024/02/21/what-is-journalism-and-mass-communication/"
          points={[
            "Reporting, content creation, communication, storytelling.",
            "Works in news, PR, advertising, digital media.",
            "Careers: Journalist, Editor, PR Officer, Content Writer.",
            "Courses: BJMC → MJMC. Creativity & awareness required.",
          ]}
        />

        <Card
          img={FineArts}
          title="Fine Arts, Design & Performing Arts"
          link="https://jgu.edu.in/blog/2024/06/07/what-is-fine-arts/"
          points={[
            "Creative expression: painting, music, dance, theatre, fashion.",
            "Careers: Artist, Designer, Musician, Dancer.",
            "Courses: BFA/B.Des → MFA. Needs talent & originality.",
          ]}
        />

        <Card
          img={socialwork}
          title="Social Work & NGO Management"
          link="https://en.wikipedia.org/wiki/Social_work_management"
          points={[
            "Community development, human rights, welfare work.",
            "Works in NGOs, government, CSR, UN orgs.",
            "Careers: Social Worker, Program Officer, CSR Executive.",
            "Courses: BSW → MSW/MA Development Studies.",
          ]}
        />

        <Card
          img={law}
          title="Legal Studies & Law"
          link="https://cleartax.in/s/accounting-and-auditing"
          points={[
            "Law, legal systems, justice, rights.",
            "Works in courts, firms, govt departments.",
            "Careers: Lawyer, Judge, Legal Analyst.",
            "Courses: BA+LLB → LLM. Needs critical thinking.",
          ]}
        />
      </div>

      {/* Careers Section */}
      <div className="px-6 md:px-20 mt-20">
        <h1
          className="text-2xl md:text-3xl font-bold text-[#526E48]"
          data-aos="fade-right"
        >
          🏷️ Top Career Options After ARTS
        </h1>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {careerData.map((c, i) => (
            <div
              key={i}
              className="border-4 border-[#526E48] rounded-2xl p-5 bg-[#DBFFCB] shadow-md"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h2 className="text-lg md:text-xl font-semibold text-center text-[#526E48]">
                {c.title}
              </h2>
              <ul className="mt-4 space-y-2 text-sm md:text-base">
                {c.items.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Reusable Card Component
const Card = ({ img, title, link, points }) => (
  <div
    className="flex flex-col md:flex-row gap-6 border-2 border-[#526E48] w-full md:w-[80%] rounded-2xl p-5 shadow-lg hover:scale-[1.02] transition"
    data-aos="fade-up"
  >
    <div className="w-full md:w-[40%]">
      <img
        src={img}
        alt={title}
        className="rounded-xl h-[200px] w-full object-cover"
      />
    </div>
    <div className="w-full md:w-[60%]">
      <h1 className="text-xl md:text-2xl font-serif mb-3 text-[#526E48]">
        {title}
      </h1>
      <ul className="text-sm md:text-base font-serif mb-3 list-disc pl-5 space-y-1">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
      <Link to={link} target="_blank" rel="noopener noreferrer">
        <button className="px-4 py-2 rounded-xl bg-[#7fb078] text-white font-semibold hover:bg-[#526E48] transition">
          Read More
        </button>
      </Link>
    </div>
  </div>
);

// Career Data
const careerData = [
  {
    title: "📊 Professional Courses",
    items: [
      "UPSC Civil Services",
      "B.Ed (for teaching)",
      "Judicial Services Exam",
      "NET/JRF (Lectureship)",
      "Mass Communication Diplomas",
      "Law Entrance Exams (CLAT, AILET)",
    ],
  },
  {
    title: "🎓 Undergraduate Courses",
    items: [
      "B.A. (History, Sociology, Psychology, etc.)",
      "BFA (Fine Arts)",
      "BJMC (Journalism & Mass Comm.)",
      "BSW (Social Work)",
      "B.Ed (Education)",
      "B.Des (Design courses)",
    ],
  },
  {
    title: "💼 Design, Media & Creative Careers",
    items: [
      "MBA (after graduation)",
      "Advertising & Branding",
      "Fashion Design",
      "Animation & Multimedia",
      "Interior Design",
      "Radio & Television Production",
    ],
  },
  {
    title: "🏦 Economics & Public Policy",
    items: [
      "Economic Research (IMF, World Bank)",
      "Government Economic Analyst",
      "Policy Think Tanks",
      "BA/BSc Economics → MA Economics",
    ],
  },
  {
    title: "⚖️ Law & Legal Field",
    items: [
      "BA + LLB (5-year Integrated)",
      "Corporate Law",
      "Civil & Criminal Law",
      "Legal Journalism",
      "Human Rights Law",
    ],
  },
  {
    title: "🖥️ Digital & Tech Careers",
    items: [
      "Digital Content Creation",
      "Social Media Marketing",
      "UX Writing / Design",
      "Podcasting / YouTube",
      "Blogging / Copywriting",
    ],
  },
  {
    title: "🎨 Creative Tech & Design Careers",
    items: [
      "Graphic Design",
      "Visual Arts",
      "Motion Graphics",
      "Figma, Adobe Suite",
    ],
  },
  {
    title: "🏢 Government Jobs",
    items: [
      "UPSC / SSC / Railways",
      "Defense (CDS, AFCAT)",
      "State PSC Jobs",
      "Social Welfare Departments",
    ],
  },
];

export default Arts;

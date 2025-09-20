import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import account from "./images/account.jpg";
import banking from "./images/banking.jpg";
import human from "./images/human.jpg";
import marketing from "./images/marketing.jpg";
import law from "./images/law.jpg";
import economic from "./images/economic.jpg";

const Commerce = () => {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);

  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
  }, []);

  const cards = [
    {
      title: "Accounting & Auditing",
      img: account,
      link: "https://cleartax.in/s/accounting-and-auditing",
      desc: [
        "Prepares and maintains financial statements (balance sheet, profit/loss).",
        "Conducts audits to ensure accuracy and compliance with laws.",
        "Handles taxation, GST, TDS, and income tax filing.",
        "Career roles: Accountant, Auditor, Tax Consultant, Cost Accountant",
      ],
    },
    {
      title: "Banking & Finance",
      img: banking,
      link: "https://cleartax.in/s/accounting-and-auditing",
      desc: [
        "Work in private & public sector banks, NBFCs, or insurance firms.",
        "Handles loans, credit, investment advice, and customer accounts.",
        "Opportunities in stock market, mutual funds, and risk analysis.",
        "Exams: IBPS, SBI PO/Clerk, RBI Grade B, SEBI, etc. Career roles: Bank Officer, Loan Advisor, Financial Analyst, Investment Banker.",
      ],
    },
    {
      title: "Management & Human Resources (HR)",
      img: human,
      link: "https://cleartax.in/s/accounting-and-auditing",
      desc: [
        "Develops company policies, manages people, and drives performance.",
        "Handles recruitment, training, payroll, and employee relations.",
        "Strong demand in corporates, startups, and MNCs.",
        "Courses: BBA, MBA in HR, Organizational Psychology.",
        "Career roles: HR Manager, Operations Manager, Team Lead, Project Coordinator.",
      ],
    },
    {
      title: "Marketing & Sales",
      img: marketing,
      link: "https://cleartax.in/s/accounting-and-auditing",
      desc: [
        "Plans and executes advertising, digital marketing, and campaigns.",
        "Conducts market research and creates branding strategies.",
        "Works in FMCG, tech companies, agencies, and startups.",
        "Digital skills like SEO, SEM, social media marketing are a plus.",
        "Career roles: Marketing Executive, Sales Manager, Brand Strategist, Social Media Manager.",
      ],
    },
    {
      title: "Economics & Research",
      img: economic,
      link: "https://cleartax.in/s/accounting-and-auditing",
      desc: [
        "Studies demand/supply, inflation, GDP, fiscal policy etc.",
        "Works in government bodies, research firms, international organizations (like IMF, World Bank).",
        "Career options include Economic Advisor, Policy Analyst, Market Researcher, Statistician.",
        "Courses: BA/B.Sc. in Economics, followed by MA or research roles. Requires strong mathematical and analytical thinking.",
      ],
    },
    {
      title: "Law & Corporate Governance",
      img: law,
      link: "https://cleartax.in/s/accounting-and-auditing",
      desc: [
        "Understands and applies laws related to contracts, companies, taxation etc.",
        "Ensures businesses follow legal standards and avoid penalties.",
        "Career paths include Corporate Lawyer, Legal Advisor, Company Secretary (CS).",
        "Can pursue B.Com + LLB or CS course for this field.",
        "Strong knowledge of business laws and communication is required.",
      ],
    },
  ];

  const careerOptions = [
    {
      title: "📊 Professional Courses:",
      desc: [
        "CA (Chartered Accountant)",
        "CS (Company Secretary)",
        "CMA (Cost & Management Accountant)",
        "CFA (Chartered Financial Analyst)",
        "CFP (Certified Financial Planner)",
      ],
    },
    {
      title: "🎓 Undergraduate Courses:",
      desc: [
        "B.Com (General / Honors)",
        "BBA (Bachelor of Business Administration)",
        "BMS (Bachelor of Management Studies)",
        "BBE (Bachelor of Business Economics)",
      ],
    },
    {
      title: "💼 Management & Business:",
      desc: [
        "MBA (after graduation)",
        "Business Development & Sales",
        "Marketing & Brand Management",
        "International Business",
        "E-commerce & Digital Business",
      ],
    },
    {
      title: "🏦 Finance & Banking Sector:",
      desc: [
        "Banking & Insurance Jobs",
        "Investment Banking",
        "Stock Market & Trading",
        "Wealth Management",
        "Financial Analyst",
      ],
    },
    {
      title: "⚖️ Law & Legal Field:",
      desc: [
        "B.Com LLB (Integrated Law Program)",
        "Corporate Law",
        "Taxation Law",
      ],
    },
    {
      title: "🖥️ Digital & Tech Careers:",
      desc: [
        "Digital Marketing",
        "E-commerce Management",
        "Data Analytics & Business Intelligence",
        "Content Creation & Social Media Management",
      ],
    },
    {
      title: "UX/UI Design for Business Apps",
      desc: [
        "Roles: UI Designer, UX Researcher, Product Designer",
        "Learn: Figma, Adobe XD, User Psychology",
        "Ideal For: Creative minds with a sense of business usability",
      ],
    },
    {
      title: "🏢 Government Jobs:",
      desc: [
        "SSC, UPSC, Banking Exams, Railways, Defense jobs are also open for Commerce students.",
      ],
    },
    {
      title: "🧑‍💼 Entrepreneurship & Startups:",
      desc: [
        "Start your own business in finance, e-commerce, consultancy, marketing agency, or trading",
      ],
    },
  ];

  return (
    <div className="px-6 md:px-20">
      {/* Header */}
      <div className="flex justify-between items-center bg-[#DBFFCB] h-[80px] px-4 md:px-16">
        <div className="cursor-pointer" onClick={handleGoBack}>
          <MdArrowBack className="text-2xl md:text-3xl" />
        </div>
        <h1
          className="text-xl md:text-3xl font-serif text-center"
          data-aos="fade-down-right"
        >
          WELCOME TO COMMERCE PAGE
        </h1>
        <div className="w-6 md:w-12"></div>
      </div>

      {/* Intro */}
      <div className="mt-10 text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-bold">
          Why Choose Commerce After 10th?
        </h2>
        <p className="text-sm md:text-base font-serif mt-2 max-w-4xl mx-auto md:mx-0">
          Commerce is the stream of business, finance, economy, management,
          trade, entrepreneurship, and marketing. If you are interested in
          money, business, accounts, management, or startups, Commerce is the
          right choice for you. It offers diverse and high-paying career options
          beyond CA.
        </p>
      </div>

      {/* Core Subjects */}
      <div className="mt-8">
        <h2 className="text-lg md:text-xl font-semibold">
          🏷️ Core Subjects in Commerce (11th & 12th)
        </h2>
        <ul className="list-disc pl-6 mt-2 space-y-1 text-sm md:text-base font-serif">
          <li>
            Accountancy : Recording, classifying, summarizing financial
            transactions.
          </li>
          <li>
            Business Studies : Principles of business, management,
            entrepreneurship.
          </li>
          <li>
            Economics : Study of economy, markets, demand & supply, policies.
          </li>
          <li>English : Compulsory language subject.</li>
          <li>
            Mathematics (Optional but recommended) : Useful for CA, CS, Banking,
            Finance.
          </li>
          <li>
            Informatics Practices (IP) / Entrepreneurship (Optional) : Basics of
            IT or business skills.
          </li>
        </ul>
      </div>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {cards.map((card, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row border-2 border-black rounded-2xl overflow-hidden shadow-lg bg-white cursor-pointer"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full md:w-48 h-48 object-cover"
            />
            <div className="p-4 flex flex-col justify-between">
              <h2 className="text-lg font-semibold text-center md:text-left">
                {card.title}
              </h2>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-sm md:text-base">
                {card.desc.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <Link to={card.link} target="_blank" rel="noopener noreferrer">
                <button className="mt-4 px-4 py-2 bg-[#7fb078] text-white rounded-lg hover:bg-[#526E48] transition">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Career Options */}
      <h2
        className="text-2xl font-semibold mt-16 mb-8 text-center md:text-left"
        data-aos="fade-right"
      >
        🏷️ Top Career Options After Commerce
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {careerOptions.map((career, i) => (
          <div
            key={i}
            className="border-4 border-[#526E48] rounded-2xl p-5 shadow-lg bg-white"
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            <h3 className="text-lg font-semibold text-center md:text-left">
              {career.title}
            </h3>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-sm md:text-base">
              {career.desc.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Commerce;

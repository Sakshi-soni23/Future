import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
      <div className="comerece-heading flex justify-around text-center bg-[#DBFFCB] h-[83px] w-[100rem]">
        <div
          className="back ml-[-10rem] mt-[2em] cursor-pointer max-[1000px]:ml-[6rem] max-[1000px]:mt-[1rem]"
          onClick={handleGoBack}
        >
          <MdArrowBack className="max-[1000px]:size-[2rem]" />
        </div>
        <div
          className="heading text-[35px] font-serif mt-[14px] mr-[7em] max-[1000px]:mr-[40rem] max-[1000px]:text-[20px] max-[1000px]:font-bold"
          data-aos="fade-down-right"
        >
          WELCOME TO PCM/B PAGE
        </div>
      </div>
      <div className="Q mt-[53px] ml-[12em] max-[1000px]:font-bold">
        <h2 className="text-[26px] leading-[61px] max-[1000px]:text-[20px] max-[1000px]:w-[90px] max-[1000px]:ml-[20rem]">
          Why Choose PCMB After 10th?
        </h2>
        <p className="text-[16px] w-[68rem] font-serif max-[1000px]:text-[1rem] max-[1000px]:w-[30rem] max-[1000px]:ml-[20rem]">
          Its Opens the Both Path for you Medical and Engineering.Each stream
          opens a unique world of opportunities
        </p>
      </div>
      <div className="example max-[1000px]:text-[20px] max-[1000px]:font-bold max-[1000px]:ml-[20rem]">
        <div className="fewoptions ml-[12rem] mt-[2rem]">
          <h1 className="text-[21px]">PCMB</h1>
          <h2>
            Ideal for: Students who want both engineering and medical options
            open
          </h2>
          <ul className="leading-[38px] ml-[27px]">
            <li>Can appear for JEE + NEET</li>
            <li>
              Biomedical Engineering ,Genetic Engineering , Research in Biotech
              , Data Science in Healthcare
            </li>
            <li>Skills: Time management, flexibility, balance</li>
            <li>Challenge: Higher study load, needs clarity on future goals</li>
          </ul>
        </div>

        <div className="another-feild">
          <h1 className="text-[34px]  mt-[36px] font-sans text-center">
            🎓 Career Options After Choosing PCM + Biology (PCMB)
          </h1>
          <div className="cards flex justify-around align-middle flex-wrap gap-[5rem]">
            <div
              className="other-card relative  border-8 border-[#526E48] w-[20rem] h-[22rem] rounded-2xl  mt-[38px] overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="6000"
            >
              <h1 className="text-center mt-[18px] text-[19px] max-[1000px]:text-[25px]">
                MBBS (Bachelor of Medicine & Surgery)
              </h1>
              <p className="other-para max-[1000px]:hidden">
                Choosing MBBS is ideal for students passionate about human
                biology and healthcare. It is a 5.5-year undergraduate program
                (including 1 year of internship) that prepares students to
                become licensed doctors. Admission is based on the NEET-UG
                entrance exam, and competition is very high. After MBBS,
                students can specialize in various fields like cardiology,
                surgery, dermatology, pediatrics, etc.
              </p>
              <Link
                to={
                  "https://www.tmu.ac.in/blog/mbbs-course-details-full-form-fees-eligibility-duration-syllabus-admission-college-and-career"
                }
              >
                <button className="other-btn border-2 p-[7px] mt-[9rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D] absolute max-[1000px]:ml-[30px]">
                  Read More
                </button>
              </Link>
            </div>
            <div
              className="other-card border-8 border-[#526E48] w-[20rem] h-[22rem] rounded-2xl mt-[38px] overflow-hidden relative"
              data-aos="fade-up"
              data-aos-duration="6000"
            >
              <h1 className="text-center mt-[18px] text-[19px] max-[1000px]:text-[25px]">
                BDS (Bachelor of Dental Surgery)
              </h1>
              <p className="other-para max-[1000px]:hidden">
                BDS is a 5-year professional degree that allows students to
                become dentists. Like MBBS, it also requires qualifying NEET-UG.
                The course involves detailed study of dental anatomy, oral
                pathology, and surgical procedures. After graduation, students
                can open their own clinics, work in hospitals, or pursue MDS
                (Master of Dental Surgery).
              </p>
              <Link
                to={
                  "https://www.shiksha.com/bds-bachelor-of-dental-surgery-chp"
                }
              >
                <button className=" other-btn border-2 p-[7px] mt-[14rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D] max-[1000px]:ml-[30px]">
                  Read More
                </button>
              </Link>
            </div>
            <div
              className="other-card border-8 border-[#526E48] w-[20rem] h-[22rem] rounded-2xl mt-[38px] overflow-hidden relative"
              data-aos="fade-up"
              data-aos-duration="6000"
            >
              <h1 className="text-center mt-[18px] text-[19px] max-[1000px]:text-[25px]">
                B.Tech in Biotechnology / Biomedical Engineering
              </h1>
              <p className="other-para max-[1000px]:hidden">
                This is a unique blend of biology and engineering, ideal for
                PCMB students. The course is 4 years long and available through
                JEE Main, state-level exams, or direct admission. Students learn
                to design medical devices, work on gene therapy, artificial
                organs, and pharmaceuticals. Career options include roles in R&D
                labs, hospitals, and biotech companies.
              </p>
              <Link
                to={
                  "https://www.shiksha.com/engineering/btech-in-biotechnology-engineering-chp"
                }
              >
                <button className=" other-btn border-2 p-[7px] mt-[14rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D] max-[1000px]:ml-[30px]">
                  Read More
                </button>
              </Link>
            </div>
            <div
              className="other-card border-8 border-[#526E48] w-[20rem] h-[22rem] rounded-2xl mt-[38px] overflow-hidden relative"
              data-aos="fade-up"
              data-aos-duration="6000"
            >
              <h1 className="text-center mt-[18px] text-[19px] max-[1000px]:text-[25px]">
                B.Pharmacy (Bachelor of Pharmacy)
              </h1>
              <p className="other-para max-[1000px]:hidden">
                B.Pharm is a 4-year degree for students interested in medicine
                formulation, pharmacology, and drug research. Admission is
                through state-level CET exams or direct college entrance.
                Graduates work in pharmaceutical industries, hospitals, clinical
                trials, and drug regulatory bodies like CDSCO or FDA. After
                this, students can do M.Pharm or even open their own chemist
                shop
              </p>
              <Link to={"https://www.shiksha.com/b-pharmacy-chp"}>
                <button className=" other-btn border-2 p-[7px] mt-[14rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D] max-[1000px]:ml-[30px]">
                  Read More
                </button>
              </Link>
            </div>
            <div
              className="other-card border-8 border-[#526E48] w-[20rem] h-[22rem] rounded-2xl mt-[38px] overflow-hidden relative"
              data-aos="fade-up"
              data-aos-duration="6000"
            >
              <h1 className="text-center mt-[18px] text-[19px] max-[1000px]:text-[25px]">
                Neuroscience / Cognitive Science
              </h1>
              <p className="other-para max-[1000px]:hidden">
                If you’re fascinated by how the brain works, these
                interdisciplinary fields combine biology, psychology, and
                computation. Available in top institutes like IISc, IITs, and
                select central universities, these courses require entrance
                exams like NEET, CUET, or JEE depending on the route. Graduates
                can work in research labs, brain-computer interface design, or
                neuropsychology.
              </p>
              <Link to={"https://en.wikipedia.org/wiki/Neuroscience"}>
                <button className=" other-btn border-2 p-[7px] mt-[14rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D] max-[1000px]:ml-[30px]">
                  Read More
                </button>
              </Link>
            </div>
            <div
              className="other-card border-8 border-[#526E48] w-[20rem] h-[22rem] rounded-2xl mt-[38px] overflow-hidden relative"
              data-aos="fade-up"
              data-aos-duration="6000"
            >
              <h1 className="text-center mt-[18px] text-[19px] max-[1000px]:text-[25px]">
                Clinical Research & Medical Lab Technology
              </h1>
              <p className="other-para max-[1000px]:hidden">
                Clinical Research and Medical Lab Technology are
                behind-the-scenes healthcare careers. These fields involve
                analyzing blood samples, drug trials, diagnostics, and quality
                assurance. After doing BMLT (Bachelor in Medical Lab Technology)
                or a B.Sc. i
              </p>
              <Link to={"https://en.wikipedia.org/wiki/Clinical_research"}>
                <button className=" other-btn border-2 p-[7px] mt-[14rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D] max-[1000px]:ml-[30px]">
                  Read More
                </button>
              </Link>
            </div>
            <div
              className="other-card border-8 border-[#526E48] w-[20rem] h-[22rem] rounded-2xl mt-[38px] overflow-hidden relative"
              data-aos="fade-up"
              data-aos-duration="6000"
            >
              <h1 className="text-center mt-[18px] text-[19px] max-[1000px]:text-[25px]">
                Environmental Science / Ecology / Forestry
              </h1>
              <p className="other-para max-[1000px]:hidden">
                If you're passionate about nature and sustainability, this is a
                meaningful field. You can pursue a B.Sc. or B.Tech in
                Environmental Science, Forestry, or Ecology, available through
                ICAR, CUET, or state-level exams. Careers involve working with
                NGOs, government departments (like MOEF), research
                organizations, or even environmental journalism.
              </p>
              <Link to={"https://en.wikipedia.org/wiki/Environmental_science"}>
                <button className=" other-btn border-2 p-[7px] mt-[14rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D] max-[1000px]:ml-[30px]">
                  Read More
                </button>
              </Link>
            </div>
            <div
              className="other-card border-8 border-[#526E48] w-[20rem] h-[22rem] rounded-2xl mt-[38px] overflow-hidden relative"
              data-aos="fade-up"
              data-aos-duration="6000"
            >
              <h1 className="text-center mt-[18px] text-[19px] max-[1000px]:text-[25px]">
                Cognitive & Brain Sciences
              </h1>
              <p className="other-para max-[1000px]:hidden">
                Cognitive Science explores how the human brain thinks, learns,
                and behaves, blending biology, psychology, computer science, and
                neuroscience. Institutes like IIT Gandhinagar and IISc offer
                specialized programs. Graduates can work in UX research,
                neuropsychology, artificial intelligence, or education tech. If
                you're fascinated by how memory, attention, and emotions work,
                this field is both intellectually rewarding and technologically
                advanced.
              </p>
              <Link
                to={
                  "https://www.fortinet.com/resources/cyberglossary/what-is-cognitive-science#:~:text=is%20cognitive%20science%3F-,Cognitive%20science%20is%20an%20investigatory%20discipline%20that%20explores%20intelligence%20and,neuroscience%2C%20philosophy%2C%20and%20psychology."
                }
              >
                <button className=" other-btn border-2 p-[7px] mt-[14rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D] max-[1000px]:ml-[30px]">
                  Read More
                </button>
              </Link>
            </div>
            <div
              className="other-card border-8 border-[#526E48] w-[20rem] h-[22rem] rounded-2xl mt-[38px] overflow-hidden relative"
              data-aos="fade-up"
              data-aos-duration="6000"
            >
              <h1 className="text-center mt-[18px] text-[19px] max-[1000px]:text-[25px]">
                Food Technology / Nutrition Science
              </h1>
              <p className="other-para max-[1000px]:hidden">
                B.Tech or B.Sc. in Food Technology teaches students how to
                develop, preserve, and improve food products. You’ll study
                biology, chemistry, and food safety regulations, often getting
                placed in FMCG companies like Nestlé, ITC, and Amul. Nutrition
                science also opens doors to becoming a dietician or health
                consultant. This field is excellent for those interested in
                human health, biology, and product innovation.
              </p>
              <Link to={"https://en.wikipedia.org/wiki/Food_technology"}>
                <button className=" other-btn border-2 p-[7px] mt-[14rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D] max-[1000px]:ml-[30px]">
                  Read More
                </button>
              </Link>
            </div>
            <div
              className="other-card border-8 border-[#526E48] w-[20rem] h-[22rem] rounded-2xl mt-[38px] overflow-hidden relative"
              data-aos="fade-up"
              data-aos-duration="6000"
            >
              <h1 className="text-center mt-[18px] text-[19px] max-[1000px]:text-[25px]">
                Scientific Research (via IISER/NISER/IITs)
              </h1>
              <p className="other-para max-[1000px]:hidden">
                If you’re passionate about pure science, you can appear for
                IISER Aptitude Test (IAT), NEST, or JEE Advanced to get into top
                research institutions. These institutes offer integrated
                B.S.-M.S. degrees focused on Physics, Chemistry, Biology, and
                Maths. You’ll work with leading scientists on real-world
                research. Ideal for students aiming for Ph.D., global
                fellowships, or a career in academia and scientific discovery.
              </p>
              <Link to={"https://en.wikipedia.org/wiki/Scientist"}>
                <button className=" other-btn border-2 p-[7px] mt-[14rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D] max-[1000px]:ml-[30px]">
                  Read More
                </button>
              </Link>
            </div>
            <div
              className="other-card border-8 border-[#526E48] w-[20rem] h-[22rem] rounded-2xl mt-[38px] overflow-hidden relative"
              data-aos="fade-up"
              data-aos-duration="6000"
            >
              <h1 className="text-center mt-[18px] text-[19px] max-[1000px]:text-[25px]">
                Artificial Intelligence in Healthcare
              </h1>
              <p className="other-para max-[1000px]:hidden">
                With a PCMB background, you can dive into AI in medicine,
                especially if you enjoy tech and biology. AI is transforming
                diagnostics, drug discovery, and personalized treatments. You
                can pursue B.Tech in AI/ML with a healthcare focus, or take a
                B.Sc. in biology and learn AI through certifications. Roles
                include medical data analyst, AI developer in health tech, and
                research assistant in predictive healthcare.
              </p>
              <Link
                to={
                  "https://en.wikipedia.org/wiki/Artificial_intelligence_in_healthcare"
                }
              >
                <button className=" other-btn border-2 p-[7px] mt-[11rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D] max-[1000px]:ml-[30px]">
                  Read More
                </button>
              </Link>
            </div>
            <div
              className="other-card border-8 border-[#526E48] w-[20rem] h-[22rem] rounded-2xl mt-[38px] overflow-hidden relative"
              data-aos="fade-up"
              data-aos-duration="6000"
            >
              <h1 className="text-center mt-[18px] text-[19px] max-[1000px]:text-[25px]">
                Health Informatics / Medical Coding
              </h1>
              <p className="other-para max-[1000px]:hidden">
                Health Informatics is the bridge between healthcare and
                information technology. It includes managing patient records,
                hospital systems, and health data analytics. After a B.Sc. in
                Health Informatics / Life Sciences + Certification, you can work
                in hospitals, insurance firms, or IT-health companies. Medical
                coding, though non-clinical, is also a high-paying career for
                biology graduates with strong attention to detail.
              </p>
              <Link to={"https://en.wikipedia.org/wiki/Health_informatics"}>
                <button className=" other-btn border-2 p-[7px] mt-[14rem] ml-[13vh] rounded-2xl cursor-pointer bg-[#62825D] max-[1000px]:ml-[30px]">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PcmB;
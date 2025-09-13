import React from "react";
import { NavLink } from "react-router-dom";
import { FaRobot, FaUserCircle, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Mentor from "./Mentor's-Talk"

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* ✅ Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          {/* Title */}
          <h1 className="text-2xl font-bold text-green-600">Future Guide</h1>

          {/* Navbar Menu */}
          <nav>
            <ul className="flex space-x-8 font-medium">
              <li>
                <NavLink to="/" className="hover:text-green-500">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/field" className="hover:text-green-500">
                  Field
                </NavLink>
              </li>
              <li>
                <NavLink to="/query" className="hover:text-green-500">
                  Mentor’s Talk
                </NavLink>
              </li>
              <li>
                <NavLink to="/ques" className="hover:text-green-500">
                  Q&A Hub
                </NavLink>
              </li>

              <li>
                <NavLink to="/feedback" className="hover:text-green-500">
                  Feedback
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* User Icon */}
        
        </div>
      </header>

      {/* ✅ Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-green-100 to-green-200 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Shape Your Future with{" "}
          <span className="text-green-600">Future Guide</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
          Your one-stop platform to explore career fields, talk to mentors, ask
          questions, and get AI-powered guidance.
        </p>
      </section>

      {/* ✅ About Section */}
      <section className="py-16 bg-white text-center px-6">
        <h3 className="text-3xl font-semibold text-green-600 mb-6">
          About Future Guide
        </h3>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
          Future Guide is designed to help students make the right career
          choices by providing mentorship, Q&A sessions, field overviews, and
          AI-powered chatbot support. Our goal is to make career decisions
          simple, effective, and stress-free.
        </p>
      </section>

      {/* ✅ Chatbot Overview */}
      <section className="py-16 bg-gray-100 px-6 text-center">
        <h3 className="text-3xl font-semibold text-green-600 mb-6 flex justify-center items-center gap-2">
          <FaRobot /> AI Chatbot Assistance
        </h3>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
          Our integrated chatbot is available 24/7 to answer your questions
          about career paths, exams, skills, and opportunities. It’s like having
          a mentor always by your side.
        </p>
      </section>

      {/* ✅ Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Mentorship Sessions</li>
              <li>Career Fields Overview</li>
              <li>Q&A Hub</li>
              <li>AI Chatbot Guidance</li>
            </ul>
          </div>

          {/* Functions */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Functions</h4>
            <ul className="space-y-2 text-sm">
              <li>Explore Career Paths</li>
              <li>Get Expert Advice</li>
              <li>Ask & Solve Queries</li>
              <li>Personalized Roadmaps</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h4>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <FaPhoneAlt /> +91 98765 43210
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2 mt-2">
              <FaEnvelope /> support@futureguide.com
            </p>
          </div>
        </div>

        <div className="text-center text-gray-500 mt-10 text-sm">
          © {new Date().getFullYear()} Future Guide. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

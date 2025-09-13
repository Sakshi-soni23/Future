import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import axios from "axios";
import { useForm } from "react-hook-form";



const FeedBack = () => {
  const navigate = useNavigate();

  const [feedback, setFeedback] = useState({
    fullname: "",
    email: "",
    experience: "",
  });

  const [emailError, setEmailError] = useState(false);
  const [experienceError, setExperienceError] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFeedback((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Email validation
  const validateEmail = (val) => {
    const emailregex = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
    if (emailregex.test(val)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  // Experience validation
  const validateExperience = (val) => {
    const experi = /^[a-zA-Z0-9\s.,!?'"-]+$/; // allows words, space, punctuation
    if (experi.test(val)) {
      setExperienceError(false);
    } else {
      setExperienceError(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
           let res = await axios.post(
             "http://localhost:4001/user/feedback",
             feedback,
             {
               headers: { "Content-Type": "application/json" },
             }
           );

      if (res.status === 201) {
        setSuccessMsg("✅ Thank you! Your feedback has been submitted.");
        setFeedback({
          fullname: "",
          email: "",
          experience: "",
        });
        setTimeout(() => setSuccessMsg(""), 4000); // auto clear after 4 sec
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setSuccessMsg("❌ Something went wrong. Please try again.");
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center py-8 px-4">
      <div className="w-full max-w-3xl">
        <div className="flex items-center justify-start mb-6">
          <div
            className="text-3xl text-blue-800 cursor-pointer hover:text-blue-600"
            onClick={handleGoBack}
          >
            <MdArrowBack />
          </div>
        </div>

        <h1 className="text-4xl font-semibold text-center text-blue-900 mb-8">
          Feedback Form
        </h1>

        <div className="bg-white rounded-3xl shadow-md p-8 w-full">
          {successMsg && (
            <div className="mb-4 text-center text-green-600 font-medium">
              {successMsg}
            </div>
          )}

          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            {/* User Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                User Name
              </label>
              <input
                type="text"
                name="fullname"
                value={feedback.fullname}
                autoComplete="off"
                onChange={handleInput}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={feedback.email}
                autoComplete="off"
                onChange={(e) => {
                  handleInput(e);
                  validateEmail(e.target.value);
                }}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
              {emailError && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  Enter a valid email address
                </p>
              )}
            </div>

            {/* Experience */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Your Experience
              </label>
              <textarea
                name="experience"
                value={feedback.experience}
                onChange={(e) => {
                  handleInput(e);
                  validateExperience(e.target.value);
                }}
                placeholder="Write about your experience..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              ></textarea>
              {experienceError && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  Please use valid characters only
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={emailError || experienceError}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-200 disabled:bg-gray-400"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;

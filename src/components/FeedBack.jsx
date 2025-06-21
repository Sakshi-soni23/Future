import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import axios from "axios";

const FeedBack = () => {
  const navigate = useNavigate();

  const [feedback, setFeedback] = useState({
    username: "",
    email: "",
    yourexperience: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFeedback((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(feedback);
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // You can replace the URL with your actual endpoint
  //     await axios.post("http://localhost:5000/feedback", feedback);
  //     alert("Feedback submitted successfully!");
  //     setFeedback({ username: "", email: "", yourexperience: "" });
  //   } catch (error) {
  //     console.error("Error submitting feedback:", error);
  //     alert("There was an error submitting your feedback.");
  //   }
  // };

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
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                User Name
              </label>
              <input
                type="text"
                name="username"
                value={feedback.username}
                autoComplete="off"
                onChange={handleInput}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={feedback.email}
                autoComplete="off"
                onChange={handleInput}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Your Experience
              </label>
              <textarea
                name="yourexperience"
                value={feedback.yourexperience}
                onChange={handleInput}
                placeholder="Write about your experience..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-200"
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

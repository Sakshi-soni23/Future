import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import axios from "axios";

const FeedBack = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/feedback", {
        name,
        email,
        experience,
        rating,
      });
      alert("✅ Feedback submitted! Thank you.");
      // Clear the form
      setName("");
      setEmail("");
      setExperience("");
      setRating(0);
    } catch (err) {
      console.error("❌ Error submitting feedback:", err);
      alert("Something went wrong.");
    }
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
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                User Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                placeholder="Write about your experience..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Rate Your Experience
              </label>
              <div className="flex gap-1 text-yellow-500 text-2xl">
                {[1, 2, 3, 4, 5].map((num) =>
                  num <= rating ? (
                    <AiFillStar
                      key={num}
                      onClick={() => setRating(num)}
                      className="cursor-pointer"
                    />
                  ) : (
                    <AiOutlineStar
                      key={num}
                      onClick={() => setRating(num)}
                      className="cursor-pointer"
                    />
                  )
                )}
              </div>
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

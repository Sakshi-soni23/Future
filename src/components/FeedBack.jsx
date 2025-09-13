import React, { useState } from "react";
import axios from "axios";

const FeedbackForm = () => {
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4002/user/feedback", {
        email,
        experience,
      });
      alert("✅ Feedback submitted successfully!");
      setEmail("");
      setExperience("");
    } catch (error) {
      console.error(error);
      alert("❌ Error submitting feedback");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-green-300 flex flex-col items-center justify-center px-6 py-12">
      <h2 className="text-4xl font-bold text-green-800 mb-8">
        We Value Your Feedback 🌱
      </h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-10 border-l-8 border-green-500"
      >
        {/* Email */}
        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Experience */}
        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Share Your Experience
          </label>
          <textarea
            placeholder="Write your thoughts..."
            className="w-full p-4 h-40 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition transform hover:scale-105"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;

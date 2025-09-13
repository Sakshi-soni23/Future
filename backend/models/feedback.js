// models/Feedback.js
import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true, // prevent duplicate emails
            lowercase: true,
            match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"]
        },
        experience: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;

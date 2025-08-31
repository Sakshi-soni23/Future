// models/Feedback.js
import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    experience: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model("Feedback", feedbackSchema);

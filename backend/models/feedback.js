import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Feedback = mongoose.model("Feedback", feedbackSchema);
export default Feedback;

import Feedback from "../models/feedback.js";

const feedbackController = async (req, res) => {
    const { fullname, email, experience } = req.body;

    try {
        if (!fullname || !email || !experience) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existUser = await Feedback.findOne({ email });
        if (existUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newFeedback = new Feedback({ fullname, email, experience });
        await newFeedback.save();

        res.status(201).json({ message: "Feedback saved successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

export default feedbackController;

import express from "express";
import Feedback from "../models/Feedback.js";

const router = express.Router();

// POST feedback
router.post("/", async (req, res) => {
    try {
        const { email, experience } = req.body;
        const feedback = new Feedback({ email, experience });
        await feedback.save();
        res.status(201).json({ message: "Feedback saved successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Failed to save feedback" });
    }
});

export default router;

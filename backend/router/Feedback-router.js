import express from "express";
import feedbackController from "../Usercontroller/feedback-controller.js";

const router = express.Router();

// Must match frontend path
router.post("/user/feedback", feedbackController);

export default router;

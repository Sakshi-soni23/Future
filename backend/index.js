import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import feedbackRoutes from "./router/Feedback-router.js"; // adjust path
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", feedbackRoutes);

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));

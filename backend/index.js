import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoute from "./router/user-routes.js";
import messageRoute from "./router/message-router.js";
import { app, server } from "./SocketIO/Server.js";

dotenv.config();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// MongoDB connection
const PORT = process.env.PORT || 3001;
const URI = process.env.Mongodb_URL; // Match your .env variable exactly

mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("MongoDB connection error:", err));

// Routes
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

// Start server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

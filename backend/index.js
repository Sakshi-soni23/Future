import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import userRoute from"./router/user-routes.js";
import cors from "cors";
import cookieParser from 'cookie-parser';
import messageRoute from "./router/message-router.js";

const app = express()
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(cookieParser());


const URL = process.env.Mongodb_URL;
try {
    mongoose.connect(URL);
    (console.log("mongodb connected"));
} catch (error) {
    console.log(error);
}
app.use("/api/user",userRoute);
app.use("/api/message", messageRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
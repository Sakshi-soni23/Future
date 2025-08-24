import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import userRoute from"./router/user-routes.js";

const app = express()
dotenv.config();
app.use(express.json());
const PORT = process.env.PORT;

const URL = process.env.Mongodb_URL;
try {
    mongoose.connect(URL);
    (console.log("mongodb connected"));
} catch (error) {
    console.log(error);
}
app.use("/user",userRoute);

app.listen(PORT)
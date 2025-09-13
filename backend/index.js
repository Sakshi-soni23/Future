import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import chatrouter from './Routes/Chatbot-route.js'
import cors from 'cors';
import feedbackRoutes from "./Routes/Feedback-Routes.js";

const app = express()
dotenv.config()
const port = process.env.PORT||3000
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected')
}).catch((err) => {
    console.error('MongoDB connection error:', err)
})

app.use("/user/feedback", feedbackRoutes);

app.use("/bot",chatrouter)


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

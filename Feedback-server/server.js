const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

// ✅ Correct CORS setup
app.use(cors({
    origin: "http://localhost:5174",  // <-- your frontend port
    methods: ["POST", "GET"]
}));

app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/feedbackDB")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Schema and Model
const feedbackSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    yourexperience: { type: String, required: true },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

// 🔁 Test route
app.get("/", (req, res) => {
    res.send("✅ Backend is working");
});

// POST route
app.post("/feedback", async (req, res) => {
    try {
        console.log("📥 Received data:", req.body);  // 👈 ADD THIS LINE

        const newFeedback = new Feedback(req.body);
        await newFeedback.save();                    // 👈 THIS LINE might be causing the error

        res.status(201).json({ message: "Feedback saved successfully" });
    } catch (error) {
        console.error("❌ Error saving feedback:", error.message);  // 👈 SEE THIS IN TERMINAL
        res.status(500).json({ message: "Error saving feedback", error: error.message });
    }
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

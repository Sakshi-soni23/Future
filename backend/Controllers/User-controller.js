import User from "../models/user-models.js";
import bcrypt from "bcryptjs";
import createTokenAndSaveCookie from "../jwt/generateToken.js";

// SIGNUP
export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        if (!fullname || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            fullname,
            email,
            password: hashedPassword,
        });

        // generate token and save cookie
        createTokenAndSaveCookie(newUser._id, res);

        res.status(201).json({
            user: {
                _id: newUser._id,
                fullname: newUser.fullname,
                email: newUser.email,
            },
            message: "Signup successful",
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// LOGIN
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        // compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // generate token
        createTokenAndSaveCookie(user._id, res);

        res.status(200).json({
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
            },
            message: "Login successful",
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// LOGOUT
export const logout = async (req, res) => {
    try {
        res.clearCookie("jwt");
        res.status(200).json({ message: "User logged out successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// GET ALL USERS
export const allUsers = async (req, res) => {
    try {
        const loggedInUser = req.user._id;
        const filteredUsers = await User.find({
            _id: { $ne: loggedInUser },
        }).select("-password");
        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in allUsers Controller: " + error);
        res.status(500).json({ message: "Internal server error" });
    }
};

import User from "../models/user-models.js";
import bcrypt from "bcryptjs";
import usertoken from "../jwt/generate-token.js";
// signup controller
 export const signup = async (req, res) => {
    try {
       
        const { fullname, email, password } = req.body;

        // ✅ Check if user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // ✅ Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // ✅ Save user (no confirm password)
        const newUser = new User({
            fullname,
            email,
            password: hashedPassword
        });

        await newUser.save();

        // ✅ Generate token
        usertoken(newUser._id, res);

        return res.status(201).json({
            message: "User registered successfully",
            user: {
                _id: newUser._id,
                fullname: newUser.fullname,
                email: newUser.email,
            }
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
};


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        // ✅ Compare password using bcrypt
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // ✅ Optionally generate token again
        usertoken(user._id, res);
        res.status(200).json({
            message: "User logged in successfully",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Server error, please try again" });
        console.log(error);
    }
};

export const logout = async (req,res)=>{
    try {
        res.clearCookie('jwt');
        res.status(200).json({message:"loggedout sucessfully"});
    } catch (error) {
        res.status(500).json({ message: "Server error, please try again" });
        console.log(error);
    }

}


import express from "express";
import { signup, login ,logout} from "../Controllers/User-controller.js";


const router = express.Router();   // ✅ Capital R

// use the signup controller directly
router.post("/signup", signup);

router.post("/login",login);
router.post("/logout",logout);

export default router;

import express from "express";
import { signup, login ,logout,feedback, getUserProfile} from "../Controllers/User-controller.js";
import Secureroutes from "../Middleware/SecureRoutes.js";

const router = express.Router();   // ✅ Capital R

// use the signup controller directly
router.post("/signup", signup);

router.post("/login",login);
router.post("/logout",logout);
router.post("/feedback",feedback);
router.get("/getUserProfile", Secureroutes,getUserProfile);

export default router;

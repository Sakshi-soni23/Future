import express from "express";
import { Sendmessage,getmessage } from "../Controllers/Messagecontroller.js";
import SecureRoutes from "../Middleware/SecureRoutes.js";


const router = express.Router();
router.post("/send/:id",SecureRoutes,Sendmessage);
router.get("/get/:id", SecureRoutes, getmessage);
export default router;
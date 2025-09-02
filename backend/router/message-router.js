import express from "express";
import { getMessage, sendMessage } from "../Controllers/Messagecontroller.js";
import secureRoute from "../Middleware/SecureRoutes.js";

const router = express.Router();
router.post("/send/:id", secureRoute, sendMessage);
router.get("/get/:id", secureRoute, getMessage);

export default router;

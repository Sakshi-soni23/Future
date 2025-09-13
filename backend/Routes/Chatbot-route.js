import express from "express"
const router = express.Router()
import { Message }  from "../Controller/Chatbot-message.js"
router.post('/message',Message)
export default router
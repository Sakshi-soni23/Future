import mongoose from "mongoose";
import Conversation from "../models/Conversation.js";
import Message from "../models/message-model.js";

export const Sendmessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user.id;

        // Validate ObjectIds
        if (!mongoose.Types.ObjectId.isValid(senderId) || !mongoose.Types.ObjectId.isValid(receiverId)) {
            return res.status(400).json({ error: "Invalid user ID" });
        }

        // Find or create conversation
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
                messages: [], // initialize empty array
            });
        }

        // Create new message
        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        await newMessage.save(); // save message first
        conversation.messages.push(newMessage._id); // push after message is saved
        await conversation.save(); // save conversation

        res.status(201).json({
            message: "Message sent successfully",
            newMessage,
        });
    } catch (error) {
        console.error("Error in sending message:", error);
        res.status(500).json({ message: "Internal error", error: error.message });
    }
};

export const getmessage = async (req, res) => {
    try {
        const { id: chatUserId } = req.params;
        const senderId = req.user.id;

        console.log("🔹 SenderId:", senderId);
        console.log("🔹 ChatUserId:", chatUserId);

        if (!mongoose.Types.ObjectId.isValid(senderId) || !mongoose.Types.ObjectId.isValid(chatUserId)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }

        const conversationData = await Conversation.findOne({
            participants: { $all: [senderId, chatUserId] },
        }).populate("messages");

        console.log("🔹 Conversation Data:", conversationData);

        if (!conversationData) {
            return res.status(200).json({ messages: [] });
        }

        res.status(200).json({ messages: conversationData.messages });
    } catch (error) {
        console.error("Error in get message:", error);
        res.status(500).json({ message: "Internal error", error: error.message });
    }
};


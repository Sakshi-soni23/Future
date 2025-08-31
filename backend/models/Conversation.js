import mongoose from "mongoose";
import Message from "./message-model.js";
import User from "./user-models.js";

const conversationSchema = new mongoose.Schema(
    {
        participants: [
            {
                type: mongoose.Schema.Types.ObjectId, // ✅ should use .Types.ObjectId
                ref: "User", // ✅ ref must be the model name string, not the imported model
            },
        ],
        messages: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Message", // ✅ string, not direct import
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Conversation = mongoose.model("Conversation", conversationSchema);
export default Conversation;

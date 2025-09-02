import { useState } from "react";
import useConversation from "./Useconversation.js";
import axios from "axios";

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { setMessage, selectedConversation } = useConversation();

    const sendMessages = async (message) => {
        if (!selectedConversation?._id) {
            console.warn("⚠️ No conversation selected");
            return;
        }

        setLoading(true);

        try {
            const res = await axios.post(
                `/api/message/send/${selectedConversation._id}`,
                { message }
            );

            // Always use functional updates
            setMessage((prevMessages) => [...prevMessages, res.data]);
        } catch (error) {
            console.error("❌ Error in sending message:", error.response?.data || error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, sendMessages };
};

export default useSendMessage;

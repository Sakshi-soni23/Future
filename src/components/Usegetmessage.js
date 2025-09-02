import { useEffect, useState } from "react";
import useConversation from "../components/Useconversation.js";
import axios from "axios";

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessage, selectedConversation } = useConversation();

  useEffect(() => {
    if (!selectedConversation?._id) return; // Exit if no conversation

    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `/api/message/get/${selectedConversation._id}`
        );
        setMessage(res.data); // replace all messages with fetched ones
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    getMessages();
  }, [selectedConversation, setMessage]);

  return { loading, messages };
};

export default useGetMessage;

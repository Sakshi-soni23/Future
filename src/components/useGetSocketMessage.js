import { useEffect } from "react";
import { useSocketContext } from "./useSocketContext.jsx";
import useConversation from "./Useconversation.js";

const useGetSocketMessage = () => {
    const { socket } = useSocketContext();
    const { setMessage } = useConversation();

    useEffect(() => {
        const handleNewMessage = (newMessage) => {
            const notification = new Audio(sound);
            notification.play();
            setMessage((prevMessages) => [...prevMessages, newMessage]);
        };

        socket.on("newMessage", handleNewMessage);

        return () => {
            socket.off("newMessage", handleNewMessage);
        };
    }, [socket, setMessage]);
};

export default useGetSocketMessage;

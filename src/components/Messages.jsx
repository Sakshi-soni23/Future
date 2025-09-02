import React, { useEffect, useRef } from "react";
import Message from "./Messages.jsx";
import useGetMessage from "./Usegetmessage.js";
import useGetSocketMessage from "./useGetSocketMessage.js";
import Loading from "./Loading.jsx";

function Messages() {
  const { loading, messages, setMessages } = useGetMessage();
  useGetSocketMessage(); // listen for incoming messages

  const lastMsgRef = useRef();

  // Auto-scroll to last message
  useEffect(() => {
    setTimeout(() => {
      if (lastMsgRef.current) {
        lastMsgRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, [messages]);

  // Store messages in localStorage
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("messages", JSON.stringify(messages));
    }
  }, [messages]);

  // Load from localStorage on refresh
  useEffect(() => {
    const stored = localStorage.getItem("messages");
    if (stored) {
      setMessages(JSON.parse(stored));
    }
  }, []);

  return (
    <div
      className="flex-1 overflow-y-auto"
      style={{ minHeight: "calc(92vh - 8vh)" }}
    >
      {loading ? (
        <Loading />
      ) : (
        messages.length > 0 &&
        messages.map((message, index) => (
          <div
            key={message._id}
            ref={index === messages.length - 1 ? lastMsgRef : null}
          >
            <Message message={message} />
          </div>
        ))
      )}

      {!loading && messages.length === 0 && (
        <div>
          <p className="text-center mt-[20%]">
            Say! Hi to start the conversation
          </p>
        </div>
      )}
    </div>
  );
}

export default Messages;

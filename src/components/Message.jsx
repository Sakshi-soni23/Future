import React from "react";

function Message({ message }) {
  const storedUser = localStorage.getItem("ChatApp");
  const authUser = storedUser ? JSON.parse(storedUser) : null;

  const itsMe = authUser ? message.senderId === authUser._id : false; // ✅ fixed

  const chatName = itsMe ? "chat-end" : "chat-start";
  const chatColor = itsMe ? "bg-blue-500" : "bg-gray-500";

  const createdAt = message.createdAt
    ? new Date(message.createdAt)
    : new Date();
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="p-2">
      <div className={`chat ${chatName}`}>
        <div className={`chat-bubble text-white ${chatColor}`}>
          {message.message}
        </div>
        <div className="chat-footer text-xs text-gray-300">{formattedTime}</div>
      </div>
    </div>
  );
}

export default Message;

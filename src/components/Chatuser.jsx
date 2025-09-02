import React from "react";
import useConversation from "../components/Useconversation.js";
import { useSocketContext } from "./useSocketContext.jsx";

function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  // ✅ Add these logs to check your data
  console.log("Selected Conversation:", selectedConversation);
  console.log("Online Users:", onlineUsers);

  if (!selectedConversation) {
    return (
      <div className="pl-5 pt-5 h-[12vh] flex items-center bg-gray-700">
        <span className="text-white">No chat selected</span>
      </div>
    );
  }

  const getOnlineUsersStatus = (userId) => {
    return onlineUsers?.includes(userId) ? "Online" : "Offline";
  };

  return (
    <div className="pl-5 pt-5 h-[12vh] flex space-x-4 bg-gray-700 hover:bg-gray-600 duration-300">
      <div>
        <div className="avatar online">
          <div className="w-14 rounded-full">
            <img
              src={
                selectedConversation.avatar || "https://via.placeholder.com/150"
              }
              alt={selectedConversation.fullname}
            />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl text-white">{selectedConversation.fullname}</h1>
        <span className="text-sm text-gray-300">
          {getOnlineUsersStatus(selectedConversation._id)}
        </span>
      </div>
    </div>
  );
}


export default Chatuser;

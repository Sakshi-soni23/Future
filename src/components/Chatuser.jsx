import React from "react";
import Message from "./Message";
import { IoSend } from "react-icons/io5";

const Chatuser = () => {
  return (
    <div className="flex flex-col h-screen bg-[#0d1321]">
      {/* Chat Header */}
      <div className="flex space-x-3.5 py-2.5 bg-slate-800 items-center px-4">
        <div className="avatar avatar-online">
          <div className="w-10 rounded-full">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCIyTZVXyb90oYHRiiX6YkNUc0CnzGwWjI3Q&s" />
          </div>
        </div>
        <div>
          <h1 className="text-[14px]">Sanvi sharma</h1>
          <span className="text-[10px]">Online</span>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>

      {/* Chat Input (sticks at bottom of this section only) */}
      <form
        action=""
        className="flex items-center w-full px-4 py-3 bg-[#0d1321] border-t border-gray-700"
      >
        <input
          type="text"
          placeholder="Type here"
          className="flex-1 px-4 py-2 rounded-xl bg-[#1c2433] text-white focus:outline-none"
        />
        <button
          type="submit"
          className="ml-3 text-3xl text-blue-500 flex items-center justify-center"
        >
          <IoSend />
        </button>
      </form>
    </div>
  );
};

export default Chatuser;

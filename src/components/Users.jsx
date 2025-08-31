import React from "react";
import useConversation from "./Useconversation.js";

const Users = ({ user }) => {
  // Zustand selectors
  const selectedConversation = useConversation(
    (state) => state.selectedConversation
  );
  const setSelectedConversation = useConversation(
    (state) => state.setSelectedConversation
  );

  const isSelected = selectedConversation?._id === user?._id;

  if (!user) return null;

  return (
    <div
      className={`hover:bg-slate-600 duration-300 ${
        isSelected ? "bg-slate-700" : ""
      }`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="flex space-x-3.5 mt-6 hover:bg-slate-700 duration-300 cursor-pointer">
        <div className="avatar avatar-online ml-4">
          <div className="w-14 rounded-full">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCIyTZVXyb90oYHRiiX6YkNUc0CnzGwWjI3Q&s"
              alt="avatar"
            />
          </div>
        </div>
        <div className="mt-1">
          <h1 className="text-[14px]">{user?.fullname}</h1>
          <span className="text-[10px]">{user?.email}</span>
        </div>
      </div>
    </div>
  );
};

export default Users;

import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import { io } from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
  const { authUser } = useAuth();
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    if (authUser?._id) {
      // Initialize socket
      const socketInstance = io("http://localhost:4001", {
        query: { userId: authUser._id },
      });

      setSocket(socketInstance);

      // Listen for online users
      socketInstance.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      // Cleanup on unmount or authUser change
      return () => {
        socketInstance.disconnect();
        setSocket(null);
        setOnlineUsers([]);
      };
    } else {
      // If user logs out, reset everything
      setSocket(null);
      setOnlineUsers([]);
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

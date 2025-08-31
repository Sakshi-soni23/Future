import React, { createContext, useState, useContext } from "react";

export const Authcontext = createContext();

export const AuthProvider = ({ children }) => {
  const [authuser, setauthUser] = useState(null); // initially null, no auto-login

  return (
    <Authcontext.Provider value={{ authuser, setauthUser }}>
      {children}
    </Authcontext.Provider>
  );
};

export const useAuth = () => useContext(Authcontext);

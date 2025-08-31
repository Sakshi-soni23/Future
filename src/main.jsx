import React from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./components/AuthProvider"; // ✅ your auth context
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);

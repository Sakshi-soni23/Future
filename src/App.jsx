import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Query from "./components/Mentor's-Talk";
import Ques from "./components/Q&A Hub";
import FeedBAck from "./components/FeedBack";
import Field from "./components/Field";
import Home from "./components/Home";
import Pcm from "./components/Pcm";
import Pcb from "./components/Pcb";
import Arts from "./components/Arts";
import PcmB from "./components/PcmB";
import Government from "./components/Government";
import Commerece from "./components/Commerece";
import User from "./components/User";
import Left from "./components/Left";
import Right from "./components/Right";
import Search from "./components/Search";
import Users from "./components/Users";
import Logout from "./components/Logout";
import Chatuser from "./components/Chatuser";
import Message from "./components/Message";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    { path: "/field", element: <Field /> },
    { path: "/ques", element: <Ques /> },
    { path: "/query", element: <Query /> }, // ✅ Chatbot + auth happens inside Query
    { path: "/feedback", element: <FeedBAck /> },
    { path: "/stream/pcm", element: <Pcm /> },
    { path: "/stream/pcb", element: <Pcb /> },
    { path: "/stream/pcmb", element: <PcmB /> },
    { path: "/stream/arts", element: <Arts /> },
    { path: "/stream/commerece", element: <Commerece /> },
    { path: "/government", element: <Government /> },
    { path: "/user", element: <User /> },
    { path: "/left", element: <Left /> },
    { path: "/right", element: <Right /> },
    { path: "/search", element: <Search /> },
    { path: "/users", element: <Users /> },
    { path: "/logout", element: <Logout /> },
    { path: "/chatuser", element: <Chatuser /> },
    { path: "/message", element: <Message /> },
    { path: "/signup", element: <Signup /> },
    { path: "/login", element: <Login /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

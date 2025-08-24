import { useState } from "react";
import React from "react";
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
import Pcmb from "./components/PcmB";
import Government from "./components/Government";
import Commerece from "./components/Commerece";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PcmB from "./components/PcmB";
import User from "./components/User";
import Left from "./components/Left";
import Right from "./components/Right";
import Search from "./components/Search";
import Users from "./components/Users";
import Logout from "./components/Logout";
import Chatuser from "./components/Chatuser";
import Message from "./components/Message";

function App() {
  const [count, setCount] = useState(0);
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
    {
      path: "/Field",
      element: (
        <>
          <Field />
        </>
      ),
    },
    {
      path: "/Ques",
      element: (
        <>
          <Ques />
        </>
      ),
    },
    {
      path: "/Query",
      element: (
        <>
          <Query />
        </>
      ),
    },
    {
      path: "/FeedBack",
      element: (
        <>
          <FeedBAck />
        </>
      ),
    },
    {
      path: "/stream/pcm",
      element: (
        <>
          <Pcm />
        </>
      ),
    },
    {
      path: "/stream/pcb",
      element: (
        <>
          <Pcb />
        </>
      ),
    },
    {
      path: "/stream/Pcmb",
      element: (
        <>
          <PcmB />
        </>
      ),
    },
    {
      path: "/stream/Arts",
      element: (
        <>
          <Arts />
        </>
      ),
    },
    {
      path: "/stream/commerece",
      element: (
        <>
          <Commerece />
        </>
      ),
    },
    {
      path: "/Government",
      element: (
        <>
          <Government />
        </>
      ),
    },
    {
      path: "/User",
      element: (
        <>
          <User />
        </>
      ),
    },
    {
      path: "/Left",
      element: (
        <>
          <Left />
        </>
      ),
    },
    {
      path: "/Right",
      element: (
        <>
          <Right />
        </>
      ),
    },
    {
      path: "/Search",
      element: (
        <>
          <Search />
        </>
      ),
    },
    {
      path: "/Users",
      element: (
        <>
          <Users />
        </>
      ),
    },
    {
      path: "/Logout",
      element: (
        <>
          <Logout />
        </>
      ),
    },
    {
      path: "/Chatuser",
      element: (
        <>
          <Chatuser />
        </>
      ),
    },
    {
      path: "/Message",
      element: (
        <>
          <Message/>
        </>
      ),
    },
  ]);
  return  <RouterProvider router={router} />
  
}

export default App;

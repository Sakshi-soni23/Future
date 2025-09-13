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
  ]);

  return <RouterProvider router={router} />;
}

export default App;

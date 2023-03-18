import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importing th pages/componets

import Username from "./components/Username";
import Profile from "./components/Profile";
import Password from "./components/Password";
import Reset from "./components/Reset";
import Recovery from "./components/Recovery";
import Register from "./components/Register";
import PageNotFound from "./components/PageNotFound";

function App() {
  // Root routes
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Username></Username>,
    },
    {
      path: "/register",
      element: <Register></Register>,
    },
    {
      path: "/password",
      element: <Password></Password>,
    },
    {
      path: "/profile",
      element: <Profile></Profile>,
    },
    {
      path: "/recovery",
      element: <Recovery></Recovery>,
    },
    {
      path: "/reset",
      element: <Reset></Reset>,
    },
    {
      path: "*",
      element: <PageNotFound></PageNotFound>,
    },
  ]);

  return (
    <main>
      <RouterProvider router={routers}></RouterProvider>
    </main>
  );
}

export default App;

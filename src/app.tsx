import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Other } from "./other";
import { Home } from "./home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/other",
    element: <Other />,
  },
]);

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

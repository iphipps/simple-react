import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Link,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const Header = () => (
  <header>
    <Link to="/">Home Page</Link>
    <Link to="/other">Other Page</Link>
  </header>
);

export const Home = () => (
  <div>
    <Header />
    Home Page
  </div>
);
export const Other = () => (
  <div>
    <Header />
    Other Page
  </div>
);

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

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import {
  Blog,
  Content,
  ErrorPage,
  Explore,
  HelpCenter,
  HIW,
  TermsServives,
} from "./pages/";
import {About, Contact, Features, Product} from "./components";

const router = createBrowserRouter([
  {path: "/",element: <App />,errorElement: <ErrorPage />,
  },
  {path: "howitworks",element: <HIW />,},
  {path: "blog",element: <Blog />,},
  {path: "content",element: <Content />,},
  {path: "explore", element: <Explore /> },
  {path: "helpCenter",element: <HelpCenter />, },
  {path: "termsservives",element: <TermsServives />,},
  {path: "contact" , element:<Contact/>},
  {path: "features" , element:<Features/>},
  {path: "about" , element:<About/>},
  {path: "product" , element:<Product/>}



]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

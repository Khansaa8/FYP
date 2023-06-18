import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import {
  Blog,
  Contact,
  ErrorPage,
  Explore,
  HelpCenter,
  HIW,
  TermsServives,
} from "./pages/";
import { About, Features, Product } from "./components";

const router = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/howitworks" element={<HIW />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/helpCenter" element={<HelpCenter />} />
      <Route path="/termsservives" element={<TermsServives />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/features" element={<Features />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>{router}</React.StrictMode>
);

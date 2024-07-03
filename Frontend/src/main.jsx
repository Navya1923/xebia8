import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/personaldetail" element={<PersonalDetails />} />
    </Routes> */}
    </BrowserRouter>
  </React.StrictMode>
);

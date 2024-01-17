import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppProfile from "./AppProfile";
import AppCount from "./AppCount";
import AppProducts from "./AppProducts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProfile />
    <AppCount />
    <AppProducts />
  </React.StrictMode>
);

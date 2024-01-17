import React from "react";
import ReactDOM from "react-dom/client";
// import AppXY from "./components/AppXY.jsx";
import AppMentor from "./components/AppMentor";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <AppXY /> */}
    <AppMentor />
  </React.StrictMode>
);

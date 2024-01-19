import React from "react";
import ReactDOM from "react-dom/client";
// import AppXY from "./components/AppXY.jsx";
// import AppMentor from "./components/AppMentor.jsx";
// import AppMentors from "./components/AppMentors.jsx";
import AppMentorsImmer from "./components/AppMentorsImmer";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <AppXY /> */}
    {/* <AppMentor /> */}
    {/* <AppMentors /> */}
    <AppMentorsImmer />
  </React.StrictMode>
);

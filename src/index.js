import React from "react";
import ReactDOM from "react-dom/client";
// import AppXY from "./components/AppXY.jsx";
// import AppMentor from "./components/AppMentor.jsx";
// import AppMentors from "./components/AppMentors.jsx";
// import AppMentorsImmer from "./components/AppMentorsImmer";
// import AppForm from "./components/AppForm";
import AppWrap from "./components/AppWrap";
import "./index.css";
import AppTheme from "./components/AppTheme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <AppXY /> */}
    {/* <AppMentor /> */}
    {/* <AppMentors /> */}
    {/* <AppMentorsImmer /> */}
    {/* <AppForm /> */}
    {/* <AppWrap /> */}
    <AppTheme />
  </React.StrictMode>
);

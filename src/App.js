/** @format */
import React, { useEffect } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; // bootstrap css
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"; // bootstap js bundle
import "antd/dist/antd.css"; // ant design css
import AOS from "aos";
import "aos/dist/aos.css"; // aos css
import AppRouter from "./Config/AppRouter";

// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                              App.js
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
const App = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <>
      <AppRouter />
    </>
  );
};

export default App;

/** @format */

import React from "react";
import About from "../../Components/About";
import FirstNav from "../../Components/FirstNav";
import Footer from "../../Components/Footer";
import Moon3D from "../../Components/Moon3D";
import Navbar from "../../Components/Navbar";
import RoadMap from "../../Components/RoadMap";
import Team from "../../Components/Team";
import Wellcome from "../../Components/Wellcome";
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                           Home page
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
function Home() {
  return (
    <>
      {/* 
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                           components call
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
    */}
      <FirstNav />
      <Navbar />
      <Wellcome />
      <About />
      <Moon3D />
      <RoadMap />
      <Team />
      <Footer />
    </>
  );
}

export default Home;

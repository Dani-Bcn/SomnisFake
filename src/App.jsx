import "./App.css";
import gsap from "gsap";
import { useEffect, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Header from "./Header";
import Footer from "./Footer";
import Viscoelastica from "./pages/Viscoelatica";
import Aniversari from "./pages/Aniversari";
import America from "./pages/America";
import Africa from "./pages/Africa";
import Home from "./Home";
import SomiadorPlus from "./pages/Somiador_plus";
import Sleep from "./pages/Sleep";
import Molles from "./pages/Molles_Ensacades";
import Normablock from "./pages/Normablock";
import Articulables from "./pages/Articulables";
import Juvenil from "./pages/Juvenil";
import Bultex from "./pages/Bultex";
import Arce from "./pages/Arce";

import { Routes, Route } from "react-router-dom";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  let mm = gsap.matchMedia();

  /* useEffect(() => {
    gsap.to(".logoBultex", {
      opacity: 100,
      scrollTrigger: {
        trigger: ".box",
        start: "center center",
        end: "600",
        scrub: 2,
      },
      y: -500,
    });
  }, []); */

  return (
    <main
      className="w-screen h-auto  
     flex flex-col  items-center  "
    >
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/aniversari" element={<Aniversari />} />
        <Route path="/viscoelastica" element={<Viscoelastica />} />
        <Route path="/somiador-plus" element={<SomiadorPlus />} />
        <Route path="/sleep" element={<Sleep />} />
        <Route path="/molles-ensacades" element={<Molles />} />
        <Route path="/normablock" element={<Normablock />} />
        <Route path="/articulables" element={<Articulables />} />
        <Route path="/juvenil" element={<Juvenil />} />
        <Route path="/bultex" element={<Bultex />} />
        <Route path="/america" element={<America />} />
        <Route path="/africa" element={<Africa />} />
        <Route path="arce" element={<Arce />} />
      </Routes>
      {/*  <Footer /> */}
    </main>
  );
}

export default App;

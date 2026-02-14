import "./App.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Header from "./Header";
import Footer from "./Footer";
import Viscoelastica from "./pages/Viscoelatica";
import Aniversari from "./pages/Aniversari";
import Home from "./Home";
import SomiadorPlus from "./pages/Somiador_plus";
import Sleep from "./pages/Sleep";
import Molles from "./pages/Molles_Ensacades";
import Normablock from "./pages/Normablock";
import Articulables from "./pages/Articulables";
import Juvenil from "./pages/Juvenil";
import Bultex from "./pages/Bultex";
import Arce from "./pages/Arce";
import King from "./pages/King";
import Bultex_Bit_Art from "./pages/Bultex_Bit_Art";
import Art20_Nova from "./pages/Art20_Nova";
import Apple from "./pages/Apple";
import Huracan from "./pages/Huracan";
import Bultex_Bit from "./pages/Bultex_Bit";
import Bultex_Sim from "./pages/Bultex_Sim";

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {

 
  const location = useLocation();
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
      className=" h-auto  
     flex flex-col  items-center"
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
        <Route path="/juvenil" element={<Juvenil />} />
        <Route path="/bultex" element={<Bultex />} />
        <Route path="/arce" element={<Arce />} />
        <Route path="/king" element={<King />} />
        <Route path="/articulables" element={<Articulables />} />
        <Route path="/bultex_bit_art" element={<Bultex_Bit_Art />} />
        <Route path="/art20_nova" element={<Art20_Nova />} />
        <Route path="/apple" element={<Apple />} />
        <Route path="/huracan" element={<Huracan />} />
        <Route path="/bultex" element={<Bultex />} />
        <Route path="/bultex_bit" element={<Bultex_Bit />} />
        <Route path="/bultex_sim" element={<Bultex_Sim />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;

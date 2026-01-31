import { motion as m } from "framer-motion";
import LogoSvg from "./componentsSvg.jsx/LogoSVG";
import Stars3D from "./components3d/Stars3D";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Viscoelastica from "./pages/Viscoelatica";
/*import Matalassos from "./pages/Matalassos";
import Top5 from "./pages/Top5";

import Molles from "./pages/Molles";
import Ensacades from "./pages/Ensacades";
import Normablock from "./pages/Normablock";
import Articulables from "./pages/Articulables";
import Juvenil from "./pages/Juvenil";
import Bultex from "./pages/Bultex"; */

export default function Header() {
  <Routes>
    {/*     <Route path="/top5" element={<Top5 />} /> */}
    <Route path="/viscoelastica" element={<Viscoelastica />} />
    {/*  <Route path="/molles" element={<Molles />} />
    <Route path="/ensacades" element={<Ensacades />} />
    <Route path="/normablock" element={<Normablock />} />
    <Route path="/articulables" element={<Articulables />} />
    <Route path="/juvenil" element={<Juvenil />} />
    <Route path="/bultex" element={<Bultex />} /> */}
  </Routes>;

  return (
    <m.div
      animate={{
        opacity: 1,
        y: 0,
      }}
      initial={{ opacity: 0, y: -20 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1,
        ease: "circOut",
      }}
      className="w-screen h-30  fixed z-500 flex items-center justify-around "
    >
      <div className="absolute w-full  h-full backdrop-blur-xl bg-red-600/15  z-10"></div>
      <LogoSvg />
      <Stars3D />
      <Navbar />
      {/*     <NavMenu /> */}
    </m.div>
  );
}

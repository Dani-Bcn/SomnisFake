import { motion as m } from "framer-motion";
import LogoSvg from "./componentsSvg.jsx/LogoSVG";
import Stars3D from "./components3d/Stars3D";
import Navbar from "./Navbar";
import NavMenu from "./NavMenu";

export default function Header() {
 

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
      className=" w-full h-30  fixed z-250 flex items-center justify-around "
    >
      <div className="absolute w-full  h-full backdrop-blur-xl bg-red-600/15  z-250"></div>
       <LogoSvg />
      <Stars3D />
      <Navbar />
      <NavMenu /> 
    
    </m.div>
  );
}

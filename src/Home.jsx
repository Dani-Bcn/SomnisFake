import "./App.css";
import LogoPikolinSvg from "./componentsSvg.jsx/LogoPikolinSvg";
import BultexLogoSvg from "./componentsSvg.jsx/BultexLogoSvg";
import { motion as m } from "framer-motion";
export default function Home() {
  return (
    <main className="w-full   text-2xl bg-red-200 z-250 ">
      <video
        src="https://videos.pexels.com/video-files/4057148/4057148-uhd_2732_1440_25fps.mp4"
        autoPlay
        muted
        loop
        playsInline
        className=" brightness-25 block-background__video--fixed block-background__image"
        poster="https://images.pexels.com/videos/4057148/pexels-photo-4057148.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
      />
      <m.div
        animate={{
          opacity: 1,
          y: 0,
        }}
        initial={{ opacity: 0, y: 20 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 1,
          ease: "circOut",
        }}
        className="w-full  mt-50  flex flex-col items-center justify-center gap-10 text-center text-white z-10 absolute top-0 left-0  px-4"
      >
        <div className="w-full ">
          <h2>Volem que dormis millor cada dia amb marques de confiança com</h2>
          <LogoPikolinSvg />
        </div>
        <div>
          <h3>DORM A CASA TEVA</h3>
          <h3 className="bebas-neue-regular ">
            COM EN UN <span>HOTEL</span>
          </h3>
        </div>
      </m.div>
      <div className="logoBultex  z-10 flex items-start justify-center ">
        <BultexLogoSvg />
      </div>
    </main>
  );
}

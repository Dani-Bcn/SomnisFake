import React from "react";
import "./App.css";
import LogoPikolinSvg from "./componentsSvg.jsx/LogoPikolinSvg";
import gsap from "gsap";
import { useEffect, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import BultexLogoSvg from "./componentsSvg.jsx/BultexLogoSvg";
import { motion as m } from "framer-motion";
import Header from "./Header";
export default function Home() {
  return (
    <main className="w-screen h-full  flex-1  flex flex-col items-center  ">
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
        className="w-screen box  h-screen mt-20   flex  items-center justify-center gap-32 z-10 "
      >
        <div className="h-62 w-150  flex mt-10 flex-col justify-start items-start">
          <h2 className="w-full  text-5xl text-[rgb(207,207,157)]">
            Volem que dormis millor cada dia amb marques de confiança com
          </h2>
          <LogoPikolinSvg />
        </div>
        <div className="w-68 h-50  flex flex-wrap justify-start items-start ">
          <h3 className="bebas-neue-regular text-5xl text-[rgb(207,207,157)]">
            DORM A CASA TEVA
          </h3>
          <h3 className="bebas-neue-regular text-7xl text-[rgb(207,207,157)]">
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

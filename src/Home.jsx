import "./App.css";
import LogoPikolinSvg from "./componentsSvg.jsx/LogoPikolinSvg";
import BultexLogoSvg from "./componentsSvg.jsx/BultexLogoSvg";
import { motion as m } from "framer-motion";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  let mm = gsap.matchMedia();

  useEffect(() => {
    window.scrollTo(0, 0);
    mm.add("(min-width:900px)", () => {
      gsap.to(".box", {
        scrollTrigger: {
          trigger: ".box",
          start: "top top",
          end: "5000",
          scrub: 2,
        },
        y: -600,
      });
    });
  }, []);
  return (
    <main className="w-full h-screen box  text-2xl bg-red-200 z-150 ">
      <video
        src="https://videos.pexels.com/video-files/4057148/4057148-uhd_2732_1440_25fps.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="fixed  brightness-25 block-background__video--fixed block-background__image"
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
        <div className="logoBultex mt-10 opacity-0 lg:mt-25">
          <BultexLogoSvg />
        </div>
      </m.div>
    </main>
  );
}

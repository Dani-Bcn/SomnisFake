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
    /*    mm.add("(min-width:900px)", () => {
      gsap.to(".box", {
        scrollTrigger: {
          trigger: ".box",
          start: "top top",
          end: "5000",
          scrub: 2,
        },
        y: -600,
      }); 
    });*/
  }, []);
  return (
    <main className=" flex justify-center">
      <video
        src="https://videos.pexels.com/video-files/4057148/4057148-uhd_2732_1440_25fps.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="fixed  brightness-25 block-background__video--fixed block-background__image"
        poster="https://images.pexels.com/videos/4057148/pexels-photo-4057148.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
      />
      <div className="h-screen"></div>
      <div className="absolute w-11/12   text-center montserrat-regular text-xl text-gray-300 mt-40  flex flex-col lg:flex-row lg:mt-70 lg:text-3xl lg:gap-50 justify-center">
        <div className="flex flex-col lg:gap-10 mb-15 lg:w-5/12">
          <h3>Volem que dormis millor cada dia amb marques de confiança com</h3>
          <LogoPikolinSvg />
        </div>
        <div className="lg:w-3/12 bebas-neue-regular text-5xl w-1/2 text-start">
          <h3>DORM A CASA TEVA COM EN UN</h3>
          <h2 className="text-9xl lg:text-[200px] text-indigo-300">Hotel</h2>
        </div>
      </div>
    </main>
  );
}

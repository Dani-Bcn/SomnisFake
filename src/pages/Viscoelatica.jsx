import { motion as m } from "framer-motion";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Viscoelatica() {
  gsap.registerPlugin(ScrollTrigger);
  let mm = gsap.matchMedia();
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.registerPlugin(ScrollTrigger);

    // REVELAR ELEMENTOS AL HACER SCROLL
    gsap.utils.toArray(".reveal").forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 20%",
        onEnter: () => {
          el.classList.remove("hidden");
          gsap.fromTo(el, { y: 50 }, { y: 0, duration: 1, ease: "power2.out" });
        },
      });
    });
  }, []);

  return (
    <div className="w-screen py-20  p-5 lg:p-10 flex flex-col gap-10  bg-[#64462e] ">
      <img
        className=" reveal hidden lg:mr-60 absolute inset-0 mx-auto mt-20 w-100 lg:w-4/12 opacity-50 pointer-events-none"
        src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=468,fit=crop/YBgjMgabRgiQr27z/polaroid_visco-min-mjE4obvk3XCPr0ax.png"
        alt=""
      />

      <h2 className="mt-35 lg:mt-50 text-6xl lg:text-9xl bebas-neue-regular z-10">
        Viscoelastica
      </h2>
      <h3 className=" text-3xl lg:text-6xl bebas-neue-regular relative z-10">
        ¿QUE ÉS LA VISCOELÀSTICA?
      </h3>

      <div className="   gap-10 lg:flex-row flex-col relative z-10 max-w-6xl">
        <div className="gap-5 flex flex-col text-gray-100 font-semibold">
          <p >
            La viscoelàstica és un material sintètic sensible a la calor i la
            pressió que s'adapta a la forma del cos i recupera la seva forma
            original quan cessa la pressió, creant una sensació d'abraçada.
            Aquesta propietat la fa molt útil en productes de descans com
            matalassos i coixins, ja que alleuja la pressió en punts clau com
            espatlles i malucs i millora la postura. El material, desenvolupat
            per la NASA a la dècada de 1960, es coneix també com a "escuma amb
            memòria" o "memory foam". <br/><br/>Els matalassos viscoelàstics Pikolin
            s'adapten punt per punt al teu cos per a un descans complet i
            relaxant. Les seves propietats us ofereixen una adaptabilitat
            perfecta perquè cada nit gaudiu d'un somni reparador que us permeti
            començar cada dia ple d'energia.
          </p>
        </div>
      </div>
    </div>
  );
}

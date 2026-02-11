
import { motion as m } from "framer-motion";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";



export default function Molles() {
  gsap.registerPlugin(ScrollTrigger);
  let mm = gsap.matchMedia();
useEffect(() => {
  window.scrollTo(0, 0);
  gsap.registerPlugin(ScrollTrigger);

  // Animación existente
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

  // REVELAR ELEMENTOS AL HACER SCROLL
  gsap.utils.toArray(".reveal").forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: "top 20%",
      onEnter: () => {
        el.classList.remove("hidden");
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );
      },
    });
  });
}, []);


  return (
    <div className="w-screen h-[300%] p-10 flex flex-col gap-10 justify-center items-center  ">
      {/* IMAGEN DE FONDO */}
      <img
        className="reveal hidden absolute inset-0 mx-auto mt-20 w-100 lg:w-125 opacity-50 pointer-events-none"
        src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=468,fit=crop/YBgjMgabRgiQr27z/polaroid_molles_ensacades-min-AQEewW5BaMtwVEg6.png"
        alt=""
      />

      {/* CONTENIDO */}
      <h1 className="mt-50 lg:text-8xl text-6xl bebas-neue-regular text-center relative z-10">
        ¿QUE SÓN LES MOLLES ENSACADES?
      </h1>

      <div className="reveal hidden  gap-10 lg:flex-row flex-col relative z-10 max-w-6xl">
        <div className="gap-5 flex flex-col">
          <h3 className="text-4xl lg:text-6xl bebas-neue-regular">
            Matalàs de molles Normablock
          </h3>
          <p className="lg:text-xl">
            El matalàs Arce és un matalàs econòmic de molles Normablock i
            encoixinat Fibercel. Gràcies als seus 23 cm d'alçada aquest matalàs
            de molls de fil continu és una elecció segura i duradora. De fermesa
            mitjana, compta amb un confort extra suau i una transpiració idònia.
          </p>
        </div>
      </div>
    </div>
  );
}


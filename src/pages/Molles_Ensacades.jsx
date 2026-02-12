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
          gsap.fromTo(el, { y: 50 }, { y: 0, duration: 1, ease: "power2.out" });
        },
      });
    });
  }, []);

  return (
    <div className="w-screen h-[300%] p-10 flex flex-col gap-10 justify-center items-center  ">
      <img
        className="reveal hidden absolute inset-0 mx-auto mt-20 w-100 lg:w-125 opacity-30 pointer-events-none"
        src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=468,fit=crop/YBgjMgabRgiQr27z/polaroid_molles_ensacades-min-AQEewW5BaMtwVEg6.png"
        alt=""
      />

      {/* CONTENIDO */}
      <h1 className="mt-50 lg:text-8xl text-6xl bebas-neue-regular text-center relative z-10">
        ¿QUE SÓN LES MOLLES ENSACADES?
      </h1>

      <div className="   gap-10 lg:flex-row flex-col relative z-10 max-w-6xl">
        <div className="gap-5 flex flex-col">
          <p className="lg:text-xl">
            Els molls ensacats són un sistema de molls individuals, cadascun
            embolicat en la seva pròpia bossa de roba. Aquesta independència
            permet que cada moll s'adapti de manera individual a la pressió,
            oferint una major adaptabilitat, suport ergonòmic i reducció de la
            transferència de moviment entre llits. També afavoreixen la
            transpirabilitat del matalàs perquè permet el pas de l'aire entre
            els sacs. CARACTERÍSTIQUES ESPECIAL · Adaptabilitat individual: Cada
            moll respon de manera independent al pes, adaptant-se a la forma del
            cos i alleujant els punts de pressió. · Independència de llits: Com
            que cada moll està aïllat, els moviments d'una persona al llit no es
            transmeten a l'altra banda, cosa que garanteix un descans més
            reparador. · Transpirabilitat: L'estructura del matalàs permet una
            bona circulació de l'aire, cosa que ajuda a dissipar la calor i la
            humitat, fent-ho ideal per a persones que passen calor a la nit. ·
            Durabilitat: En no haver frec entre els molls, es redueix el desgast
            i s'allarga la vida útil del matalàs. ·Suport reforçat: És possible
            dissenyar zones de descans reforçades a la carcassa per oferir més
            suport en àrees clau del cos.
          </p>
        </div>
      </div>
    </div>
  );
}

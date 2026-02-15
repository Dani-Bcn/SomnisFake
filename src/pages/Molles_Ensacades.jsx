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
        src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=468,fit=crop/YBgjMgabRgiQr27z/polaroid_molles_ensacades-min-AQEewW5BaMtwVEg6.png"
        alt=""
      />

      <h2 className="mt-35 lg:mt-50 text-6xl lg:text-9xl bebas-neue-regular z-10">
        MOLLES ENSACADES
      </h2>
      <h3 className=" text-3xl lg:text-6xl bebas-neue-regular relative z-10">
        ¿QUE SÓN LES MOLLES ENSACADES?
      </h3>

      <div className="   gap-10 lg:flex-row flex-col relative z-10 max-w-6xl">
        <div className="gap-5 flex flex-col text-gray-100 font-semibold">
          <p>
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

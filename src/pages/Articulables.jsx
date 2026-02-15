import { motion as m } from "framer-motion";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Articulables() {
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
        src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=468,fit=crop/YBgjMgabRgiQr27z/polaroid_articulables-baja-AVLxojJlxPC8raG5.png"
        alt=""
      />

      <h2 className="mt-35 lg:mt-50 text-6xl lg:text-9xl bebas-neue-regular z-10">
        ARTICULABLES
      </h2>
      <h3 className=" text-3xl lg:text-6xl bebas-neue-regular relative z-10">
        MATALÀS ESPECÍFIC PER A LLIT ARTICULAT
      </h3>

      <div className="   gap-10 lg:flex-row flex-col relative z-10 max-w-6xl">
        <div className="gap-5 flex flex-col text-gray-100 font-semibold">
          <p>
            Un matalàs articulat és un matalàs dissenyat per fer-se servir amb
            un somier articulat, permetent que es doblegui i s'adapti a les
            diferents posicions del llit, com el cap, el tronc i les cames. Està
            fabricat amb materials flexibles com escuma de poliuretà, làtex o
            viscoelàstica per poder adaptar-se als moviments sense deformar-se i
            sense oferir massa resistència a la torsió. Característiques
            principals: Flexibilitat: La seva composició amb materials com
            escuma, làtex o viscoelàstica li permet doblegar-se sense trencar-se
            ni fer-se malbé, a diferència dels matalassos de molls tradicionals
            que són massa rígids. Adaptabilitat: Inclou perfils o ranures
            transversals a la base per facilitar l'adaptació a les diferents
            posicions del somier, permetent un suport adequat en qualsevol
            configuració. Ús amb somier articulat: Està fet específicament per
            ser utilitzat en llits amb somier articulat, que pot ser manual o
            elèctric, i que es pot inclinar a diferents plans. Beneficis: Major
            confort: Permet personalitzar la postura per llegir, veure la
            televisió o descansar, cosa que ajuda a alleujar mals d'esquena i
            coll. Alleugeriment de la pressió: Elevar les cames pot ser
            beneficiós per reduir la tensió muscular i millorar-ne la
            circulació. Ajuda a la mobilitat: És especialment útil per a
            persones amb mobilitat reduïda, més grans o amb certes patologies,
            ja que els permet ajustar la seva posició sense ajuda.
          </p>
        </div>
      </div>
    </div>
  );
}

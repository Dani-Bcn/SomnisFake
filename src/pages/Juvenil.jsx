import { motion as m } from "framer-motion";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
export default function Juvenil() {
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
        src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=468,fit=crop/YBgjMgabRgiQr27z/polaroid_juvenil_baja-YrD48wGyOWSbqv32.png"
        alt=""
      />

      <h2 className="mt-35 lg:mt-50 text-6xl lg:text-9xl bebas-neue-regular z-10">
        JUVENIL
      </h2>
      <h3 className=" text-3xl lg:text-6xl bebas-neue-regular relative z-10">
        ¿QUE ÉS UN MATALÀS JUVENIL?
      </h3>

      <div className="   gap-10 lg:flex-row flex-col relative z-10 max-w-6xl">
        <div className="gap-5 flex flex-col text-gray-100 font-semibold">
          <p>
            Un matalàs juvenil Pikolin és un matalàs dissenyat específicament
            per a les necessitats de nens i adolescents, amb característiques de
            confort, higiene i durabilitat adaptades al seu creixement. Es
            caracteritzen per oferir diferents tecnologies, com a nuclis de moll
            o escumació, capes de viscoelàstica o fibra per a la
            transpirabilitat, i tractaments hipoalergènics com la tecnologia
            Triple Barrera. Característiques principals Tecnologia del nucli:
            Poden utilitzar nuclis de molles (com el sistema Normablock) que
            ofereixen fermesa i suport, o nuclis d'escumació (com Confortcel)
            que proporcionen adaptabilitat i confort. Adaptabilitat i confort:
            Incorporen capes de viscoelàstica o fibres que s'adapten a la forma
            del cos, cosa que ajuda a relaxar els músculs ia mantenir la columna
            en una postura natural. Higiene: La majoria inclou tractaments
            hipoal·lergògens com la tecnologia Triple Barrera, que protegeix
            contra àcars, bacteris i fongs, aspectes crucials per al descans
            infantil. Transpirabilitat: Compten amb teixits transpirables i
            capes de fibra atèrmica que permeten la circulació de l´aire per a
            un millor descans. Durabilitat: Alguns models són reversibles i
            tenen nanses verticals per facilitar-ne la mobilitat i perllongar la
            vida útil. Varietat de models: La marca ofereix diferents models amb
            diferents nivells de fermesa i característiques, com ara l'Apple, o
            Huracán, per adaptar-se a les preferències individuals.
          </p>
        </div>
      </div>
    </div>
  );
}

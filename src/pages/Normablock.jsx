import { motion as m } from "framer-motion";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
export default function Normablock() {
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
        src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=468,fit=crop/YBgjMgabRgiQr27z/polaroid_normablock_baja-d95Z2Go2oWIVL6OL.png"
        alt=""
      />

      <h2 className="mt-35 lg:mt-50 text-6xl lg:text-9xl bebas-neue-regular z-10">
        NORMABLOCK
      </h2>
      <h3 className=" text-3xl lg:text-6xl bebas-neue-regular relative z-10">
        ¿QUÈ ÉS LA TECNOLOGIA NORMABLOCK® DE PIKOLIN?
      </h3>

      <div className="   gap-10 lg:flex-row flex-col relative z-10 max-w-6xl">
        <div className="gap-5 flex flex-col text-gray-100 font-semibold">
          <p>
            Sistema de molls de fil continu més avançat del mercat. És fruit
            d'anys de recerca i exclusiu de Pikolin. El seu disseny permet la
            combinació entre la salut i el confort al descans, a més la seva
            construcció garanteix una llarga vida útil del matalàs. Està format
            per fil continu d'acer en forma de Z que s'uneixen entre si formant
            un nucli que es tracta tèrmicament per millorar-ne el comportament i
            la durabilitat. El disseny exclusiu i la disposició de Normablock®
            garanteix que l'esquena adopti una posició correcta i natural a tota
            la superfície. Proporciona la fermesa necessària a cada part del
            cos, gràcies al reforç lumbar. Beneficis de la tecnologia
            Normablock® Primer: Posició saludable de l'esquena Una aproximació
            més gran dels molls al terç central facilita el reforç lumbar
            imprescindible per a la recuperació dels músculs de l'esquena i la
            columna vertebral. Ofereix més fermesa a la zona lumbar ja que el
            terç central està reforçat amb una densitat de molls superior.
            Proporciona més resistència a l'enfonsament, això manté la columna
            vertebral alineada i garanteix una postura totalment ergonòmica. A
            més: Independència de llits (Absència de moviments) L'unió
            longitudinal de les seves files de molls (únic al mercat) confereix
            més estabilitat al nucli, aïllant els moviments de cada dorment. Els
            molls estan units els uns als altres per unes espirals que recorren
            tota la superfície del matalàs, aquest disseny facilita que la
            pressió exercida en un moll és transmesa longitudinalment als molls
            adjacents, però no als molls transversals, evitant la transmissió de
            pressions d'un costat del matalàs a un altre, creant zones de
            descans totalment independents. Compta amb: Major superfície útil El
            disseny en forma de Z dels molls augmenta la densitat de filferro a
            tot el matalàs, eliminant els espais buits i estenent les propietats
            de sustentació a tot el matalàs, aconseguint que la superfície de
            descans útil sigui del 100%. A més, compta amb un reforç perimetral
            que incrementa la durabilitat del matalàs. Cal no oblidar la
            durabilitat Gràcies a la seva estructura de fil continu mancat de
            nusos interns i al tractament tèrmic que se li aplica a tot el
            nucli. La configuració elimina els punts d'unió entre els molls
            minimitzant el risc de trencament i augmentant-ne la durabilitat. A
            més: Menor pressió corporal Una major quantitat de molls per a un
            repartiment millor de les pressions. I cal no oblidar: Ventilació
            interna La seva estructura lliure de barreres internes garanteix el
            flux dʻaire necessari per mantenir la higiene del dorment i la
            durabilitat dels materials.
          </p>
        </div>
      </div>
    </div>
  );
}

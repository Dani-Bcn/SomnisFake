import { useNavigate } from "react-router-dom";

export default function Viscoelatica() {
  return (
    <div className="w-full  p-5  lg:mt-20 lg:px-10 flex flex-col   z-100 bg-red-200/20 bebas-regular">
      <div className="  clear-start mt-40 lg:mt-40 h-auto flex flex-col items-start justify-start gap-4  montserrat-regular">
        <h2 className=" text-6xl lg:text-9xl bebas-neue-regular">VISCOELÀSTICA</h2>
        <h3 className=" text-4xl lg:text-6xl bebas-neue-regular"> ¿QUE ÉS LA VISCOELÀSTICA? </h3>
        <p>
          La viscoelàstica és un material sintètic sensible a la calor i la
          pressió que s'adapta a la forma del cos i recupera la seva forma
          original quan cessa la pressió, creant una sensació d'abraçada.
          Aquesta propietat la fa molt útil en productes de descans com
          matalassos i coixins, ja que alleuja la pressió en punts clau com
          espatlles i malucs i millora la postura. El material, desenvolupat per
          la NASA a la dècada de 1960, es coneix també com a "escuma amb
          memòria" o "memory foam". Els matalassos viscoelàstics Pikolin
          s'adapten punt per punt al teu cos per a un descans complet i
          relaxant. Les seves propietats us ofereixen una adaptabilitat perfecta
          perquè cada nit gaudiu d'un somni reparador que us permeti començar
          cada dia ple d'energia.
        </p>
      </div>
    </div>
  );
}

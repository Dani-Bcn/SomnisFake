import { useNavigate } from "react-router-dom";

export default function Viscoelatica() {
  return (
    <div className="w-full lg:h-screen p-10 lg:p-0 flex flex-col items-center justify-center z-100 bg-red-600/15">
      <div className=" lg:w-1/2 clear-start mt-30 lg:mt-40 h-auto flex flex-col items-start justify-start gap-4 text-indigo-800 montserrat-regular">
        <h1 className="font-bold text-4xl lg:text-7xl">VISCOELÀSTICA</h1>
        <h2 className="font-bold text-2xl lg:text-3xl"> ¿QUE ÉS LA VISCOELÀSTICA? </h2>
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

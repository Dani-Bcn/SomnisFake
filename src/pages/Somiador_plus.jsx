import { useNavigate } from "react-router-dom";

export default function SomiadorPlus() {
  return (
    <div className="w-full lg:h-screen p-10 lg:p-0 flex flex-col items-center justify-center z-100 bg-indigo-200/25">
      <div className=" lg:w-1/2 clear-start mt-30 lg:mt-40 h-auto flex flex-col items-start justify-start gap-4 text-gray-700 montserrat-regular">
        <h1 className="font-bold text-4xl lg:text-7xl">SOMIADOR PLUS</h1>
        <h2 className="font-bold text-2xl lg:text-3xl">
          El nucli Normablock s'identifica pel nombre de molles a la zona
          lumbar.
        </h2>
        <p>
          El matalàs Pikolin Somiador Plus és un matalàs que es caracteritza per
          oferir un bon descans amb excel·lent adaptabilitat. Aquest matalàs
          forma part de la gamma Pikolin Effective, té una alçada de 27cm i
          compta amb una fermesa mitjana, la qual cosa permet suportar
          eficientment el pes del cos i afavoreix una gran adaptació. Gràcies a
          la seva tecnologia de l'encoixinat Fibercel®, t'aportarà un excel·lent
          confort i deixarà passar l'aire de forma continuada durant el descans
          per a una millor transpiració evitant així la humitat.
        </p>
      </div>
    </div>
  );
}

import { useNavigate } from "react-router-dom";

export default function Sleep() {
  return (
    <div className="w-full lg:h-screen p-10 lg:p-0 flex flex-col items-center justify-center z-100 bg-indigo-200/25">
      <div className=" lg:w-1/2 clear-start mt-30 lg:mt-40 h-auto flex flex-col items-start justify-start gap-4 text-gray-700 montserrat-regular">
        <h1 className="font-bold text-4xl lg:text-7xl">SLEEP</h1>
        <h2 className="font-bold text-2xl lg:text-3xl">
          Matalàs de molles ensacades Adapt-Tech - SLEEP.
        </h2>
        <p>
          Sleep és un bon matalàs sobre el qual descansar. De fermesa mitjana i
          30 cm d'alçada. Amb el seu nucli de molles ensacades Adapt-Tech i el
          seu encoixinat Progression Fiber Plus és un matalàs que ofereix el
          màxim confort durant el descans. L'element diferencial d'aquest
          matalàs és el seu encoixinat Progression Fiber Plus: dues capes
          d'escuma suau i una de fibra de polièster. Gràcies a aquesta
          tecnologia es produeix un contacte dolç i suau acompanyat amb
          propietats termoreguladores.
        </p>
      </div>
    </div>
  );
}

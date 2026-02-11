export default function Aniversari() {
  return (
    <div className=" lg:block w-screen h-full  overflow-hidden bg-blue-100/25 z-50">
      <h1 className="text-7xl lg:text-9xl text-center lg:mt-50 mt-40 bebas-neue-regular">
        75 Aniversari
      </h1>

      <div className="flex lg:p-10 px-5 lg:gap-10  flex-col items-center justify-center">
        <h3 className=" lg:text-4xl text-3xl bebas-neue-regular">
          MATALÀS D'HOTEL ED.LIMITADA
        </h3>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-6">
          <img
            className="h-65 object-contain"
            src="/public/75-aniversari.avif"
            alt=""
          />
          <p className="bebas-regular">
            Hem creat el matalàs perfecte perquè dormis a casa, com en un hotel.
            Pikolin, a través de Pikolin Contract és el proveïdor de matalassos
            de les grans cadenes hoteleres del món. I per celebrar el nostre 75è
            aniversari, llancem aquesta edició limitada perquè visquis
            l'experiència d'un hotel Pikolin cada nit. Un producte dissenyat amb
            diversitat de tecnologies que el fan un matalàs d´alta gamma propi
            d´un gran hotel. El seu nucli de fil continu Normablock reforçat amb
            vareta de contorn ofereix una fermesa ideal però aconseguint
            l'adaptació necessària gràcies a la capa viscoelàstica Visco Air que
            l'acompanya proporcionant així una millor qualitat del son. A més,
            per a una primera acollida progressiva, compta amb la combinació de
            dues capes: HR Supersoft i Viscofoam pròpies de la tecnologia
            Progression Visco que permet acollir la persona en funció de la
            pressió i empremta atèrmica. Tot això acompanyat del tractament
            higiènic Triple Barrera que prevé l'aparició d'àcars, bacteris i
            fongs al matalàs. A més, propi d'un matalàs d'hotel, el teixit
            Stretch és ignífug i antixinxes. La millor opció si vols un matalàs
            de qualitat superior.
          </p>
        </div>
      </div>

      <div className="w-screen flex flex-col py-5  lg:flex-row bg-indigo-200/25 justify-start items-start">
        <div className="flex flex-col lg:p-10 gap-5  px-5 lg:w-1/2 ">
          <h3 className="text-6xl  bebas-neue-regular">COMPOSICIÓ</h3>

          <p className="text-xl">
            1. Teixit Stretch de gran tacte i pes que li proporciona elasticitat
            i transpirabilitat.
          </p>

          <p>
            2. Progression Visco®: combinació de Supersoft, material cel·lular
            d'alta densitat i baixa fermesa que s'adapta al cos, i Viscofoam,
            viscoelàstica d'alta densitat amb efecte memòria que acull la
            persona en funció de la pressió i la petjada atèrmica.
          </p>

          <p>
            3. Viscoair: material viscoelàstic que millora la qualitat del son i
            proporciona una major transpirabilitat.
          </p>

          <p>
            4. Capa de Polièter reforçat d'alta densitat: amortidor que
            proporciona una estabilitat confortable durant el descans.
          </p>

          <p>
            5. Nucli Normablock Firm: sistema de molls de fil continu més
            avançat del mercat que ofereix la fermesa i adaptació necessària per
            a un descans complet.
          </p>

          <p>
            6. Cinc nanses brodades que faciliten la mobilitat i transport del
            matalàs.
          </p>

          <p>
            T. Triple Barrera®: Protecció higiènica total i permanent. Barrera
            que actua contra les principals causes d'al·lèrgies: àcars,
            bacteris i fongs; durant la vida útil del matalàs.
          </p>
        </div>

        <img
          className="h-125 lg:p-10 p-5"
          src="/public/75-aniversari_composicio.avif"
          alt=""
        />
      </div>
    </div>
  );
}

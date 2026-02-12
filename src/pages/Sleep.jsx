

export default function Sleep() {
  return (
    <div className="lg:p-10 px-5 lg:block w-screen h-full overflow-hidden bg-blue-100/25 z-50">
      <h2 className="text-7xl lg:text-9xl  lg:mt-50 mt-40 bebas-neue-regular">
        Sleep
      </h2>

      <div className="flex   flex-col gap-5 ">
        <h3 className=" lg:text-6xl text-3xl bebas-neue-regular">
          Matalàs de molles ensacades Adapt-Tech - SLEEP
        </h3>

        <div className="flex flex-col lg:flex-row gap-5 lg:gap-6">
          <img
            className="object-contain"
            src="https://assets.zyrosite.com/cdn-cgi/image//YBgjMgabRgiQr27z/sonador-YX4jqbpMWJFqkaG6.jpeg"
            alt=""
          />
          <p className="bebas-regular">
            Sleep és un bon matalàs sobre el qual descansar. De fermesa mitjana
            i 30 cm d'alçada. Amb el seu nucli de molles ensacades Adapt-Tech i
            el seu encoixinat Progression Fiber Plus és un matalàs que ofereix
            el màxim confort durant el descans. L'element diferencial d'aquest
            matalàs és el seu encoixinat Progression Fiber Plus: dues capes
            d'escuma suau i una de fibra de polièster. Gràcies a aquesta
            tecnologia es produeix un contacte dolç i suau acompanyat amb
            propietats termoreguladores.
          </p>
        </div>
      </div>

      <div className=" flex flex-col py-5  lg:flex-row  justify-end items-end">
        <div className="flex flex-col gap-5">
          <h3 className="text-3xl lg:text-6xl  bebas-neue-regular">
            COMPOSICIÓ
          </h3>

          <p>
            <span>1. Teixit Stretch: </span> De gran tacte i pes que li
            proporciona elasticitat i transpirabilitat.
          </p>

          <p>
            <span>2. Fibercel®: </span> Combinación de fibra atérmica y una capa
            de poliéter HR. Consigue crear un confort suave y deja pasar de
            forma continuada el aire durante el descanso para una mejor
            transpiración.
          </p>

          <p>
            <span>3. Polièter reforçat d'alta densitat:</span> amortidor que
            proporciona una estabilitat confortable durant el descans.
          </p>

          <p>
            <span>4. Nucli Adapt-Tech®</span> molls ensacats que s'adapten punt
            per punt a la morfologia de cada dorment i afavoreix la
            independència de llits.
          </p>

          <p>
            <span> 5. Cinc nanses:</span> brodades que faciliten la mobilitat i
            transport del matalàs.
          </p>
          <p>
            <span> 6. Triple Barrera®:</span> Protecció higiènica total i
            permanent. Actua contra les principals causes d'al·lèrgies: àcars,
            bacteris i fongs; durant la vida útil del matalàs.
          </p>
        </div>
        <div className="w-full justify-center items-center flex">
          <img
            className="sx:h-75 lg:h-125 lg:p-10 p-5"
            src="https://assets.zyrosite.com/cdn-cgi/image//YBgjMgabRgiQr27z/esquema_somiador-AzGMJePy8LSxvb02.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

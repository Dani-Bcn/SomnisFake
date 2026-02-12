import React from "react";

export default function Bultex_Bit_Art() {
  return (
    <div className="  lg:p-10 px-5 lg:gap-10 lg:block w-screen h-full  overflow-hidden bg-blue-100/25 z-50">
      <h1 className="text-7xl lg:text-9xl  lg:mt-50 mt-40 bebas-neue-regular">
        BULTEX BIT-ART
      </h1>
      <div className="flex   flex-col ">
        <h3 className=" lg:text-6xl text-3xl bebas-neue-regular">
          Matalàs articulat de material cel·lular avançat Bultex Nanotech.
        </h3>
        <div className="flex flex-col lg:flex-row justify-center items-start lg:gap-6">
          <img
            className="py-5 object-contain"
            src="/public/75-aniversari.avif"
            alt=""
          />
          <p className="bebas-regular">
            El nou matalàs Bit Art, amb la seva estètica renovada, està
            dissenyat especialment per a llits articulats. Està compost pel
            nucli Bultex Nanotech i capa d'encoixinat Progression Fiber. El
            nucli Bultex Nanotech d'alta densitat que s'adapta al pes i la
            musculatura de les persones per donar-li el suport precís que
            necessita. El perfilat està especialment dissenyat per facilitar
            l'articulat del matalàs. La capa de Progression Fiber és la
            combinació de dues capes (una de HR Supersoft i una de fibra de
            polièster). Produeix un contacte dolç i suau al dormir ia més
            aquesta tecnologia és termoreguladora, cosa que facilita un descans
            de més qualitat. Tots els matalassos Bultex compten amb la
            tecnologia de Barrera Total, protecció higiènica integral. Barrera
            que bloqueja el desenvolupament de les tres principals fonts de
            problemes higiènics: bacteris, àcars i fongs.
          </p>
        </div>
      </div>

      <div className="w-screen flex flex-col py-5  lg:flex-row  justify-start items-start">
        <div className="flex flex-col lg:p-10 gap-5  px-5 lg:w-1/2 ">
          <h3 className="text-6xl  bebas-neue-regular">COMPOSICIÓ</h3>

          <p>
            1. Teixit Stretch: de gran tacte i pes que li aporta elasticitat i
            transpirabilitat.
          </p>

          <p>
            2. Progression Visco®: és la combinació de Supersoft, material
            cel·lular d'alta densitat i baixa fermesa que s'adapta al cos, i
            Memoryfoam, viscoelàstica d'alta densitat amb efecte memòria que
            acull la persona en funció de la pressió i la petjada tèrmica per
            adaptar-se a la morfologia de cada persona.
          </p>

          <p>
            3. El nucli Bultex Nanotech: s'adapta al pes i la musculatura per
            donar el suport precís, especialment dissenyat per a l'articulació
            del matalàs.
          </p>

          <p>
            4. Confecció en semicaixa: dota el matalàs d'una estètica
            diferencial i permet actuar millor els components interns.
          </p>

          <p>
            5. Barrera total®: protecció higiènica integral. Barrera que actua
            bloquejant el desenvolupament de les tres principals fonts de
            problemes higiènics en una superfície de descans: bacteris, àcars i
            fongs.
          </p>
        </div>

        <img
          className="h-125 lg:p-10 p-5"
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=357,fit=crop,trim=0;12.947976878612716;0;0/YBgjMgabRgiQr27z/bultex-bit-art_composicio-mjE41eNbDJtoPXk3.webp"
          alt=""
        />
      </div>
    </div>
  );
}

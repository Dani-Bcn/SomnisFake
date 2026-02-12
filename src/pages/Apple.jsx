import React from "react";

export default function Apple() {
  return (
    <div className="  lg:p-10 px-5 lg:gap-10  lg:block w-screen h-full  overflow-hidden bg-blue-100/25 z-50">
      <h2 className="text-7xl lg:text-9xl  lg:mt-50 mt-40 bebas-neue-regular">
        APPLE
      </h2>
      <div className="flex   flex-col ">
        <h3 className=" lg:text-6xl text-3xl bebas-neue-regular">
          Matalàs juvenil d'escuma Confortcel, viscoelàstica i HR
        </h3>

        <div className="flex flex-col py-5 gap-5 lg:flex-row justify-start items-start ">
          <img
            className="h-70 object-contain"
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=365,fit=crop,trim=419.10631741140213;6.163328197226503;650.231124807396;33.898305084745765/YBgjMgabRgiQr27z/apple-Awv8B5e7ZaSPMB8e.webp"
            alt=""
          />
          <p className="bebas-regular">
            Apple és un matalàs juvenil compost pel nucli de material cel·lular
            Confortcel juntament amb capes d'encoixinat Viscofoam i fibra
            atèrmica. La combinació d'aquests materials suporta de manera
            eficient el pes del cos i manté les propietats per al descans durant
            tota la vida útil del matalàs. Aquest matalàs juvenil conté una capa
            viscoelàstica de gran adaptabilitat que s'adapta a la curvatura del
            cos per facilitar la circulació sanguínia, incrementant la qualitat
            del son. El matalàs juvenil Apple és perfecte per als més petits de
            la casa. Mesura 22 cm d'alçada.
          </p>
        </div>
      </div>
      <div className=" flex flex-col py-5  lg:flex-row  justify-end items-end">
        <div className="flex flex-col gap-5">
          <h3 className="text-6xl  bebas-neue-regular">COMPOSICIÓ</h3>
          <p>
            <span>1. Teixit Stretch:</span> de gran tacte i pes que li
            proporciona elasticitat i transpirabilitat.
          </p>
          <p>
            <span>2. Viscofoam®:</span>capa d'encoixinat que acull la persona en
            funció de la pressió i la seva petjada tèrmica, adaptant-se a la
            forma corporal. A més, redueix la pressió sanguínia i dispersa la
            calor que generem en dormir.
          </p>
          <p>
            <span> 3. Fibra atèrmica</span> aconsegueix crear un confort suau i
            deixa passar de manera continuada l'aire durant el descans.
          </p>
          <p>
            <span>4. Nucli Confortcel®: </span> material cel·lular dʻescumació
            dʻalta resiliència amb gran adaptabilitat, ventilació i garanteix
            una postura correcta per alʻesquena.
          </p>
          <p>
            <span> T. Triple Barrera®:</span> Protecció higiènica total i
            permanent. Barrera que actua contra les principals causes
            d'al·lèrgies: àcars, bacteris i fongs; durant la vida útil del
            matalàs.
          </p>
        </div>
        <img
          className="sx:h-75 lg:h-125 lg:p-10 p-5"
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=324,fit=crop,trim=16.403785488958988;0;21.32492113564669;0/YBgjMgabRgiQr27z/apple_caracteristiques-mk34Qx7ko4UpWegl.webp"
          alt=""
        />
      </div>
    </div>
  );
}

import React from "react";

export default function Arce() {
  return (
    <div className="  lg:p-10 px-5 lg:gap-10  lg:block w-screen h-full  overflow-hidden bg-blue-100/25 z-50">
      <h2 className="text-7xl lg:text-9xl  lg:mt-50 mt-40 bebas-neue-regular">
        ARCE
      </h2>
      <div className="flex   flex-col ">
        <h3 className=" lg:text-6xl text-3xl bebas-neue-regular">
          Matalàs de molles Normablock.
        </h3>

        <div className="flex flex-col py-5 gap-5 lg:flex-row justify-start items-start ">
          <img
           className="h-70 object-contain"
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=336,fit=crop,trim=508.47457627118644;0;634.8228043143297;40.06163328197226/YBgjMgabRgiQr27z/arce-ALp21g05Q2il2ngW.webp"
            alt=""
          />
          <p className="bebas-regular">
            El matalàs Arce és un matalàs econòmic de molles Normablock i
            encoixinat Fibercel. Gràcies als seus 23 cm d'alçada aquest matalàs
            de molls de fil continu és una elecció segura i duradora. De fermesa
            mitjana, compta amb un confort extra suau i una transpiració idònia.
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
            <span>2. Fibercel®:</span>combinació de fibra atèrmica i una capa de
            polièter HR. Aconsegueix crear un confort extra suau i deixa passar
            de manera continuada l'aire durant el descans per a una transpiració
            millor.
          </p>
          <p>
            <span> 3. Polièter reforçat d'alta densitat:</span> amortidor que
            proporciona una estabilitat confortable durant el descans.
          </p>
          <p>
            <span>4. Funda interior:</span> Per a més higiene i protecció de
            l'equip de descans.
          </p>
          <p>
            <span>4. Nucli Normablock®:</span>
            sistema de molls de fil continu més avançat del mercat que ofereix
            la fermesa i adaptació necessària per a un descans complet.
          </p>
          <p>
            <span>5. Quatre nanses:</span> brodades que faciliten la mobilitat i
            transport del matalàs.
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
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=353,fit=crop,trim=0;6.153846153846154;0;0/YBgjMgabRgiQr27z/arce_composicion-YZ9E6g7NZgIVW6bz.webp"
          alt=""
        />
      </div>
    </div>
  );
}

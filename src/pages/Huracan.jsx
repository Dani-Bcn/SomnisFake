import React from "react";

export default function Huracan() {
  return (
    <div className="  lg:p-10 px-5 lg:gap-10  lg:block w-screen h-full  overflow-hidden bg-blue-100/25 z-50">
      <h2 className="text-7xl lg:text-9xl  lg:mt-50 mt-40 bebas-neue-regular">
        HURACAN
      </h2>
      <div className="flex   flex-col ">
        <h3 className=" lg:text-6xl text-3xl bebas-neue-regular">
          Matalàs juvenil de molls Normazone amb viscofoam i fibra atèrmica
        </h3>

        <div className="flex flex-col py-5 gap-5 lg:flex-row justify-start items-start ">
          <img
            className="h-70 object-contain"
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=365,fit=crop,trim=177.91225416036306;21.180030257186083;202.26928895612707;5.295007564296521/YBgjMgabRgiQr27z/huracan-AGBzWVoLLwtQ8ERl.webp"
            alt=""
          />
          <p className="bebas-regular">
            El matalàs juvenil Huracà de molls Normazone està format per un bloc
            de molls Normazone, Viscofoam i fibra atèrmica, una combinació
            perfecta per aportar el màxim confort. Els molls Normazone
            afavoreixen la posició correcta de l'esquena aconseguint alleujar
            pressions a les zones de malucs i espatlles. Gràcies a la
            zonificació, respecta la posició natural de l'esquena i facilita una
            postura corporal perfecta. La seva capa de Viscofoam d'alta densitat
            redueix la pressió i la calor i s'adapta al contorn exacte del cos,
            afavorint el descans en una bona postura. A més, el matalàs Huracà
            de Pikolin compta amb la tecnologia d'higiene total Triple Barrera,
            que actua contra les principals causes d'al·lèrgies: àcars, bacteris
            i fongs durant la vida útil del matalàs.
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
            <span>2. La capa de Viscofoam®:</span>s'adapta a la forma del cos,
            permetent que els músculs es relaxin i que la columna adopti una
            postura natural i ergonòmica. A més, redueix la pressió sanguínia i
            dispersa la calor que generem en dormir.
          </p>
          <p>
            <span> 3. Fibra atèrmica</span> proporciona una estabilitat
            confortable durant les hores de descans.
          </p>
          <p>
            <span>4. El amortidor en polièter d'alta densitat: </span> material
            cel·lular dʻescumació dʻalta resiliència amb gran adaptabilitat,
            ventilació i garanteix una postura correcta per alʻesquena.
          </p>
          <p>
            <span> 5. El bloc de molls Normazone®:</span> li aporta la fermesa
            necessària sense renunciar a la màxima adaptabilitat, gràcies a les
            5 zones de descans
          </p>
          <p>
            <span>T.Triple Barrera®:</span> tractament higiènic exclusiu de
            Pikolin que prevé l'aparició d'àcars, bacteris i fongs
          </p>
        </div>
        <img
          className="sx:h-75 lg:h-125 lg:p-10 p-5"
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=630,fit=crop,trim=120.93764988009593;0;205.9208633093525;88.23913043478261/YBgjMgabRgiQr27z/esquema_huracan-ALp2QL8D5rsbP7wJ.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

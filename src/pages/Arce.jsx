import React from "react";

export default function Arce() {
  return (
    <div className="p-10 flex flex-col gap-5 r">
      <h2 className="mt-25 lg:mt-30 lg:text-9xl text-7xl bebas-neue-regular">
        Arce
      </h2>
      <div className="flex  gap-10 lg:flex-row  flex-col">
        <img
          className="w-100 lg:w-150"
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=336,fit=crop,trim=508.47457627118644;0;634.8228043143297;40.06163328197226/YBgjMgabRgiQr27z/arce-ALp21g05Q2il2ngW.webp"
          alt=""
        />
        <div className="gap-5 flex flex-col">
          <h3 className="text-4xl lg:text-6xl bebas-neue-regular ">Matalàs de molles Normablock</h3>
          <p className="lg:text-xl">
            El matalàs Arce és un matalàs econòmic de molles Normablock i
            encoixinat Fibercel. Gràcies als seus 23 cm d'alçada aquest matalàs
            de molls de fil continu és una elecció segura i duradora. De fermesa
            mitjana, compta amb un confort extra suau i una transpiració idònia.
          </p>
        </div>
      </div>
    </div>
  );
}

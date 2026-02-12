export default function Aniversari() {
  return (
    <div className=" lg:block w-screen h-full  overflow-hidden bg-blue-100/25 z-50">
      <h1 className="text-7xl lg:text-9xl text-center lg:mt-50 mt-40 bebas-neue-regular">
        King
      </h1>

      <div className="flex lg:p-10 px-5 lg:gap-10  flex-col items-center justify-center">
        <h3 className=" lg:text-4xl text-3xl bebas-neue-regular">
          Matalàs de gran adaptabilitat i elevada ventilació
        </h3>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-6">
          <img
            className="h-65 object-contain"
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=325,fit=crop,trim=594.7611710323575;12.326656394453005;576.271186440678;27.73497688751926/YBgjMgabRgiQr27z/king-YKb8egMV60hj0pk8.webp"
            alt=""
          />
          <p className="bebas-regular">
            HEl matalàs King està compost pel nucli de molls Normazone i les
            seves capes d'encoixinat de Viscofoam i Fibercel. El nucli de molls
            Normazone és el sistema de molls de fil continu més avançat del
            mercat. Ofereix fermesa sense renunciar a la màxima adaptació,
            gràcies a les 5 zones de descans. L'encoixinat de Viscofoam és una
            capa que acull la persona en funció de la pressió i la seva petjada
            tèrmica, adaptant-se a la forma corporal. A més, redueix la pressió
            sanguínia i dispersa la calor que generem en dormir. I la capa de
            Fibercel és la combinació de fibra atèrmica i una capa de polièter
            HR. Aconsegueix crear un confort extra suau i deixa passar de manera
            continuada l'aire durant el descans per a una transpiració millor.
            Tots els matalassos de Pikolin compten amb la tecnologia d'higiene
            total Triple Barrera que protegeix i prevé contra el desenvolupament
            de les principals fonts bacterianes d'un matalàs: àcars, bacteris i
            fongs.
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
            2. Viscofoam®: capa d'encoixinat que acull la persona en funció de
            la pressió i la seva empremta tèrmica, adaptant-se a la forma
            corporal. A més, redueix la pressió sanguínia i dispersa el calor
            que generem en dormir.
          </p>

          <p>
            Fibercel®: combinació de fibra atèrmica i una capa de polièter HR.
            Aconsegueix crear un confort extra suau i deixa passar de forma
            continuada l'aire durant el descans per a una millor transpiració.
          </p>

          <p>
            Polièter reforçat d'alta densitat: amortidor que proporciona una
            estabilitat confortable durant el descans.
          </p>

          <p>
            5. Nucli Normazone®: és el sistema de molls de fil continu més
            avançat del mercat. Ofereix fermesa sense renunciar a la màxima
            adaptació, gràcies a les 5 zones de descans.
          </p>

          <p>
            6. Quatre nanses brodades que faciliten la mobilitat i transport del
            matalàs.
          </p>

          <p>
            7. Triple Barrera®: protecció higiènica total i permanent. Barrera
            que actua contra les principals causes d'al·lèrgies: àcars, bacteris
            i fongs durant la vida útil del matalàs.
          </p>
        </div>

        <img
          className="h-125 lg:p-10 p-5"
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=371,fit=crop,trim=0;33.43283582089552;0;0/YBgjMgabRgiQr27z/king_composicio-AVLxvg5l7vIrNeq6.webp"
          alt=""
        />
      </div>
    </div>
  );
}

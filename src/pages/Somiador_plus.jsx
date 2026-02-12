import { useNavigate } from "react-router-dom";

export default function SomiadorPlus() {
  return (
    <div className="  lg:p-10 px-5  lg:block w-screen h-full  overflow-hidden bg-blue-100/25 z-50">
      <h2 className="text-7xl lg:text-9xl  lg:mt-50 mt-40 bebas-neue-regular">
        SOMIADOR PLUS
      </h2>

      <div className="flex   flex-col  gap-10">
        <h3 className=" lg:text-6xl text-3xl bebas-neue-regular">
          El nucli Normablock s'identifica pel nombre de molles a la zona
          lumbar.
        </h3>

        <div className="flex flex-col lg:flex-row  lg:gap-6">
          <img
            className="h-65 object-contain"
            src="https://assets.zyrosite.com/cdn-cgi/image//YBgjMgabRgiQr27z/sonador-YX4jqbpMWJFqkaG6.jpeg"
            alt=""
          />
          <p className="bebas-regular">
            El matalàs Pikolin Somiador Plus és un matalàs que es caracteritza
            per oferir un bon descans amb excel·lent adaptabilitat. Aquest
            matalàs forma part de la gamma Pikolin Effective, té una alçada de
            27cm i compta amb una fermesa mitjana, la qual cosa permet suportar
            eficientment el pes del cos i afavoreix una gran adaptació. Gràcies
            a la seva tecnologia de l'encoixinat Fibercel®, t'aportarà un
            excel·lent confort i deixarà passar l'aire de forma continuada
            durant el descans per a una millor transpiració evitant així la
            humitat.
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
            <span>3. Núcleo Confortcel®:</span> Material celular de espumación
            de alta resiliencia con gran adaptabilidad, ventilación y garantiza
            una postura correcta para la espalda.
          </p>

          <p>
            <span>4. Cuatro asas:</span> Bordadas que facilitan la movilidad y
            transporte del colchón.
          </p>

          <p>
            <span> 5. Triple Barrera®:</span> Protección higiénica total y
            permanente. Barrera que actúa contra las principales causas de
            alergias: ácaros, bacterias y hongos; durante la vida útil del
            colchón.
          </p>
        </div>

        <img
          className="h-100 lg:p-10 py-10"
          src="https://assets.zyrosite.com/cdn-cgi/image//YBgjMgabRgiQr27z/esquema_somiador-AzGMJePy8LSxvb02.png"
          alt=""
        />
      </div>
    </div>
  );
}

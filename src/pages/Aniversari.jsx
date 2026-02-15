import { motion as m, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
export default function Aniversari() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleChange = () => {
      setIsDesktop(mediaQuery.matches);
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <m.div
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="  lg:p-10 px-5 lg:gap-10 bg-[#d6c3b3] lg:block w-screen h-full  overflow-hidden  z-50"
    >
      <m.h2
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-7xl lg:text-9xl   lg:mt-50 mt-40 bebas-neue-regular"
      >
        75 Aniversari
      </m.h2>
      <div className="flex   flex-col ">
        <h3 className=" lg:text-6xl text-3xl bebas-neue-regular">
          MATALÀS D'HOTEL ED.LIMITADA
        </h3>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-6">
          <m.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className=" flex  justify-center lg:w-1500 lg:h-75 py-5  overflow-hidden "
          >
            <img
              className="w-full object-cover "
              src="https://assets.zyrosite.com/cdn-cgi/image//YBgjMgabRgiQr27z/75-aniversari-mjE41gngEbfqL7aL.webp"
              alt=""
            />
          </m.div>
          <m.p
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              opacity: { duration: 1, ease: "easeOut" },
              y: { duration: 1, ease: "easeOut" },
            }}
            className="bebas-regular"
          >
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
          </m.p>
        </div>
      </div>

      <m.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        viewport={{ once: true }}
        transition={{
          opacity: { duration: 3, ease: "easeOut" },
          y: { duration: 1, ease: "easeOut" },
        }}
        className=" flex flex-col py-5  lg:flex-row  justify-start items-start"
      >
        <div className="flex flex-col  gap-5">
          <h3 className="text-3xl lg:text-6xl  bebas-neue-regular">
            COMPOSICIÓ
          </h3>

          <p>
            <span>1. Teixit Stretch;</span> De gran tacte i pes que li
            proporciona elasticitat i transpirabilitat.
          </p>

          <p>
            <span>2. Progression Visco®:</span> combinació de Supersoft,
            material cel·lular d'alta densitat i baixa fermesa que s'adapta al
            cos, i Viscofoam, viscoelàstica d'alta densitat amb efecte memòria
            que acull la persona en funció de la pressió i la petjada atèrmica.
          </p>

          <p>
            <span> 3. Viscoair: </span>material viscoelàstic que millora la
            qualitat del son i proporciona una major transpirabilitat.
          </p>

          <p>
            <span> 4. Capa de Polièter reforçatd'alta densitat:</span> amortidor
            que proporciona una estabilitat confortable durant el descans.
          </p>

          <p>
            <span>5. Nucli Normablock Firm:</span> sistema de molls de fil
            continu més avançat del mercat que ofereix la fermesa i adaptació
            necessària per a un descans complet.
          </p>

          <p>
            <span> 6. Cinc nanses brodades:</span> Que faciliten la mobilitat i
            transport del matalàs.
          </p>

          <p>
            <span>T. Triple Barrera®:</span> Protecció higiènica total i
            permanent. Barrera que actua contra les principals causes
            d'al·lèrgies: àcars, bacteris i fongs; durant la vida útil del
            matalàs.
          </p>
        </div>

        <m.img
          layoutId="aniversari-image"
          onClick={() => setIsOpen(true)}
          className="img2 h-125 lg:p-10 py-10 cursor-pointer transition-transform duration-300 hover:scale-105"
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=737,fit=crop,trim=29.88399071925754;18.190255220417633;41.577726218097446;32.48259860788863/YBgjMgabRgiQr27z/75-aniversari_composicio-YNqMagzrgzIpeqEq.webp"
          alt=""
        />
        {isDesktop && (
          <AnimatePresence>
            {isOpen && (
              <>
                {/* Overlay oscuro con blur */}
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
                  onClick={() => setIsOpen(false)}
                />

                {/* Imagen centrada */}
                <m.img
                  layoutId="aniversari-image"
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=737,fit=crop,trim=29.88399071925754;18.190255220417633;41.577726218097446;32.48259860788863/YBgjMgabRgiQr27z/75-aniversari_composicio-YNqMagzrgzIpeqEq.webp"
                  alt=""
                  className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                   z-50 w-[45vw] max-w-5xl rounded-2xl shadow-2xl "
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    
                  }}
                />
              </>
            )}
          </AnimatePresence>
        )}
      </m.div>
    </m.div>
  );
}
